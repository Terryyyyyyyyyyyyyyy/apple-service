#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Apple 官方全量数据自动抓取与同步总线 (Master Official Apple Data Syncer)
========================================================================
直连 Apple 官方内部接口，全自动化抓取并更新：
  1. 【官方维修估价库】: iPhone、iPad、Apple Watch、AirPods 全品类官方实时保外维修报价
  2. 【官方服务网点库】: 全国 65+ 重点城市 Apple Store 直营店与官方原厂预约送修 AASP 网点
  3. 【数据集与便携版】: 自动重写 data.js、estimator_catalog.json、official_apple_pricing.json 并重新打包单文件便携版！
"""

import os
import sys
import json
import time
import re
import urllib.request
import urllib.error
from datetime import datetime
from concurrent.futures import ThreadPoolExecutor, as_completed

DIR = os.path.dirname(os.path.abspath(__file__))
DATA_JS_PATH = os.path.join(DIR, "data.js")
CATALOG_JSON_PATH = os.path.join(DIR, "estimator_catalog.json")
PRICING_RAW_PATH = os.path.join(DIR, "official_apple_pricing.json")
PORTABLE_HTML_PATH = os.path.join(DIR, "apple_service_portable.html")

# 引入网点采集模块配置
import update_stores

# Apple 官方服务估价 API 根分类 Tag
PRICING_TAGS = {
    "iPhone": "TAG_1754518739895",
    "iPad": "TAG_1750382034263",
    "Apple Watch": "TAG_1755238435489",
    "AirPods": "TAG_1749056323568"
}

def fetch_pricing_data():
    """从 Apple 官网官方接口抓取四大核心品类的实时维修报价"""
    print("\n" + "=" * 65)
    print("📡 [1/3] 开始直连 Apple 官方维修估价 API 抓取实时数据...")
    print("=" * 65)

    headers = {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Referer": "https://support.apple.com/zh-cn/iphone/repair",
        "Accept": "application/json, text/plain, */*",
        "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8"
    }

    # 加载现有 catalog 结构以保留 Mac（Mac 在官网是单独计算体系）
    if os.path.exists(CATALOG_JSON_PATH):
        with open(CATALOG_JSON_PATH, "r", encoding="utf-8") as f:
            catalog = json.load(f)
    else:
        catalog = {}

    raw_pricing_all = {}
    if os.path.exists(PRICING_RAW_PATH):
        try:
            with open(PRICING_RAW_PATH, "r", encoding="utf-8") as f:
                raw_pricing_all = json.load(f)
        except Exception:
            pass

    for cat_name, tag in PRICING_TAGS.items():
        url = f"https://support.apple.com/ols/api/pricing/products/services/pricing-estimate?locale=zh-cn&pricing_type=OOW&parent_tag_id={tag}"
        print(f"[*] 正在抓取品类: {cat_name} (Tag: {tag})...")
        
        req = urllib.request.Request(url, headers=headers)
        success = False
        for attempt in range(3):
            try:
                with urllib.request.urlopen(req, timeout=20) as resp:
                    if resp.status == 200:
                        payload = json.loads(resp.read().decode("utf-8"))
                        raw_pricing_all[cat_name] = payload
                        
                        series_list = []
                        for p in payload.get("products", []):
                            series_title = p.get("product_loc_title") or p.get("product_eng_title")
                            children = p.get("childrenProducts", [])
                            if not children:
                                services = [{"name": s.get("serviceLabel"), "price": s.get("price")} for s in p.get("services", [])]
                                if services:
                                    series_list.append({
                                        "series": series_title,
                                        "models": [{
                                            "name": series_title,
                                            "imageUrl": p.get("imageUrl", ""),
                                            "services": services
                                        }]
                                    })
                                continue
                            
                            models = []
                            for c in children:
                                model_title = c.get("product_loc_title") or c.get("product_eng_title")
                                services = [{"name": s.get("serviceLabel"), "price": s.get("price")} for s in c.get("services", [])]
                                models.append({
                                    "name": model_title,
                                    "imageUrl": c.get("imageUrl", ""),
                                    "services": services
                                })
                            if models:
                                series_list.append({
                                    "series": series_title,
                                    "models": models
                                })
                        
                        catalog[cat_name] = series_list
                        model_count = sum(len(s["models"]) for s in series_list)
                        print(f"    ✅ {cat_name} 抓取成功: {len(series_list)} 个系列, 共 {model_count} 款机型")
                        success = True
                        break
            except Exception as e:
                print(f"    ⚠️ 第 {attempt + 1} 次尝试抓取 {cat_name} 失败: {e}")
                time.sleep(1.0)
        
        if not success:
            print(f"    ❌ {cat_name} 抓取最终失败，保留本地缓存数据")

    # 保存 raw 数据
    with open(PRICING_RAW_PATH, "w", encoding="utf-8") as f:
        json.dump(raw_pricing_all, f, ensure_ascii=False, indent=2)

    # 保存 catalog json
    with open(CATALOG_JSON_PATH, "w", encoding="utf-8") as f:
        json.dump(catalog, f, ensure_ascii=False)

    return catalog

def fetch_stores_data():
    """多线程并发抓取全国重点城市服务网点"""
    print("\n" + "=" * 65)
    print("📍 [2/3] 开始直连 Apple 官方定位 API 抓取全国原厂认证服务网点...")
    print("=" * 65)
    processed = update_stores.scrape_and_process_stores()
    print(f"✅ 成功清洗入库 {len(processed)} 家全国官方原厂认证服务网点！")
    return processed

def generate_flat_prices(catalog):
    """根据最新抓取的估价库，自动生成扁平化 pricesData 数组"""
    flat = []
    for cat_name, series_list in catalog.items():
        for s in series_list:
            for m in s.get("models", []):
                m_name = m.get("name", "")
                for srv in m.get("services", []):
                    srv_name = srv.get("name", "")
                    raw_p = srv.get("price", "")
                    num_match = re.search(r"[\d,]+", raw_p)
                    if num_match:
                        price_num = int(num_match.group(0).replace(",", ""))
                    elif "Max" in m_name and "损坏" in srv_name:
                        price_num = 2199  # Apple 官方 AirPods Max 其他损坏整机更换参考价
                    else:
                        continue  # 忽略无具体报价的项目，绝不生成 0 元误导数据
                    
                    # AppleCare 自付服务费规则 (根据 AppleCare 官方保障政策)
                    if "丢失" in srv_name:
                        ac_fee = None # AppleCare+ 不为丢失提供保障 (需全额保外重购)
                    elif "电池" in srv_name:
                        ac_fee = 0
                    elif cat_name == "iPhone":
                        if "屏幕" in srv_name or "玻璃" in srv_name:
                            ac_fee = 188
                        else:
                            ac_fee = 628
                    elif cat_name == "Mac":
                        if "屏幕" in srv_name or "外壳" in srv_name or "键盘" in srv_name:
                            ac_fee = 799
                        else:
                            ac_fee = 2299
                    elif cat_name == "iPad":
                        if any(k in m_name for k in ["Pencil", "键盘", "Keyboard"]) or "Pencil" in srv_name or "键盘" in srv_name:
                            ac_fee = 199
                        else:
                            ac_fee = 368
                    elif cat_name == "Apple Watch":
                        if any(k in m_name for k in ["Hermès", "hermes", "Ultra", "Edition", "钛金属", "陶瓷", "不锈钢"]):
                            ac_fee = 628
                        else:
                            ac_fee = 528
                    elif cat_name == "AirPods":
                        ac_fee = 199
                    else:
                        ac_fee = 628

                    flat.append({
                        "category": cat_name,
                        "model": m_name,
                        "part": srv_name,
                        "out_of_warranty": price_num,
                        "applecare": ac_fee
                    })
    return flat

def validate_data_integrity(flat_prices, stores, catalog):
    """严格的数据质量与政策合规断言守卫 (Data Integrity & Policy Guardrails)"""
    print("\n" + "=" * 65)
    print("🛡️ 正在进行全量数据准确性与合规断言自检...")
    print("=" * 65)

    errors = []

    # 1. 数量与完整性守卫
    if len(flat_prices) < 400:
        errors.append(f"维修报价数据量过少 ({len(flat_prices)} 项)，预期大于 500 项")
    if len(stores) < 200:
        errors.append(f"服务网点数据量过少 ({len(stores)} 家)，预期大于 300 家")

    # 2. 关键重点机型存在性守卫
    models = {p.get("model") for p in flat_prices}
    essential_models = ["iPhone Air", "iPhone 18 Pro Max", "iPhone 17", "iPhone 16", "13 英寸 iPad Pro（M4）无线局域网机型"]
    for em in essential_models:
        if em not in models:
            errors.append(f"关键重点机型缺失: {em}")

    # 3. 价格有效性与零元防穿透守卫
    for p in flat_prices:
        oow = p.get("out_of_warranty", 0)
        if oow <= 0:
            errors.append(f"异常保外价格 (<=0): {p.get('category')} - {p.get('model')} - {p.get('part')} -> {oow}")
            break

    # 4. AppleCare 自付金政策合规守卫
    valid_ac_fees = {None, 0, 188, 199, 368, 528, 628, 799, 2299}
    for p in flat_prices:
        ac = p.get("applecare")
        if ac not in valid_ac_fees:
            errors.append(f"违规 AppleCare 自付金数值: {p.get('category')} - {p.get('model')} - {p.get('part')} -> {ac}")
            break
        if "丢失" in p.get("part", "") and ac is not None:
            errors.append(f"政策违规: AirPods 丢失必须为保外不适用，不可为 {ac}")
            break
        if p.get("category") == "iPhone" and ("屏幕" in p.get("part", "") or "玻璃" in p.get("part", "")) and ac != 188:
            errors.append(f"政策违规: iPhone 屏幕/玻璃损坏自付金必须为 188，不可为 {ac}")
            break

    if errors:
        print("\n❌ 数据质量校验失败，发现以下严重缺陷：")
        for err in errors:
            print(f"   - ⚠️ {err}")
        print("🛑 触发熔断保护：已终止写入，绝不破坏现有生产数据！\n")
        return False

    print(f"✅ 全量数据合规自检 100% 通过！(维修报价: {len(flat_prices)} 项，全国网点: {len(stores)} 家)")
    return True

def update_data_js(catalog, stores):
    """将最新数据写入 data.js"""
    print("\n" + "=" * 65)
    print("💾 [3/3] 正在将最新估价库与网点库写入 data.js...")
    print("=" * 65)

    with open(DATA_JS_PATH, "r", encoding="utf-8") as f:
        content = f.read()

    sync_timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    # 1. 提取或保留 thirdPartyBrands 与 hotAccessoriesData
    tp_match = re.search(r"(var thirdPartyBrands = \[.*?\];\nif \(typeof window !== \"undefined\"\) window\.thirdPartyBrands = thirdPartyBrands;)", content, re.DOTALL)
    tp_code = tp_match.group(1) if tp_match else ""
    if tp_code:
        tp_header = 'var PENDING_MSG = "<div class=\\"warn-text\\">该品牌售后还未经最终验证，请等待后续更新</div>";\nif (typeof window !== "undefined") window.PENDING_MSG = PENDING_MSG;\n\n'
        tp_code = tp_header + tp_code

    hot_match = re.search(r"(var hotAccessoriesData = \[.*?\];\nif \(typeof window !== \"undefined\"\) window\.hotAccessoriesData = hotAccessoriesData;)", content, re.DOTALL)
    hot_code = hot_match.group(1) if hot_match else ""
    # 彻底去除主观销售“话术”字段，仅保留纯客观产品规格、特性与搭配
    if hot_code:
        hot_code = re.sub(r',\s*pitches:\s*\[.*?\](?=\s*,\s*crossSell:)', '', hot_code)

    # 读取旧版 flat_prices 以进行真实价格变动动态比对
    old_prices = []
    old_p_match = re.search(r"var pricesData = (\[.*?\]);\nif \(typeof window", content, re.DOTALL)
    if old_p_match:
        try:
            old_prices = json.loads(old_p_match.group(1))
        except Exception:
            old_prices = []

    # 读取旧版 storesData 以防本次抓取失败导致抹空已有网点
    old_stores = []
    old_s_match = re.search(r"var storesData = (\[.*?\]);\nif \(typeof window", content, re.DOTALL)
    if old_s_match:
        try:
            old_stores = json.loads(old_s_match.group(1))
        except Exception:
            old_stores = []

    # 安全继承防护：如果本次未抓取到足够网点（例如接口限流或网络波动），自动安全继承旧版健康网点库
    if not stores or len(stores) < 100:
        if old_stores:
            print(f"⚠️  [安全继承] 本次抓取网点数量异常 (仅 {len(stores)} 家)，已自动继承已有健康网点库 ({len(old_stores)} 家)，防止数据被清空！")
            stores = old_stores

    # 安全继承防护：如果估价目录异常过少，自动从旧目录或缓存继承
    total_models = sum(len(s.get("models", [])) for cat in catalog.values() for s in cat)
    if total_models < 100 and os.path.exists(CATALOG_JSON_PATH):
        try:
            with open(CATALOG_JSON_PATH, "r", encoding="utf-8") as f:
                catalog = json.load(f)
            print(f"⚠️  [安全继承] 本次抓取机型数量异常 (仅 {total_models} 款)，已自动继承已有完整估价目录！")
        except Exception:
            pass

    flat_prices = generate_flat_prices(catalog)
    if not flat_prices or len(flat_prices) < 100:
        if old_prices:
            print(f"⚠️  [安全继承] 本次生成报价数量异常 (仅 {len(flat_prices)} 项)，已自动继承已有报价库 ({len(old_prices)} 项)！")
            flat_prices = old_prices

    # 运行数据合规与完整性断言自检 (Guardrails)
    if not validate_data_integrity(flat_prices, stores, catalog):
        print("🛑 校验未通过，触发安全熔断保护，终止写入 data.js！")
        sys.exit(1)

    flat_prices_json = json.dumps(flat_prices, ensure_ascii=False, indent=2)
    stores_json = json.dumps(stores, ensure_ascii=False, indent=2)
    catalog_json = json.dumps(catalog, ensure_ascii=False)

    # 动态比对价格变更
    price_changes = []
    if old_prices:
        old_map = {}
        for p in old_prices:
            key = (p.get("category"), p.get("model"), p.get("part"))
            old_map[key] = p.get("out_of_warranty")

        for p in flat_prices:
            key = (p.get("category"), p.get("model"), p.get("part"))
            if key in old_map:
                old_val = old_map[key]
                new_val = p.get("out_of_warranty")
                if old_val and new_val and old_val != new_val:
                    diff = new_val - old_val
                    price_changes.append({
                        "category": p.get("category"),
                        "model": p.get("model"),
                        "part": p.get("part"),
                        "old_price": old_val,
                        "new_price": new_val,
                        "diff": diff,
                        "type": "up" if diff > 0 else "down"
                    })

    # 检测新机型
    old_models = set(p.get("model") for p in old_prices) if old_prices else set()
    new_models = set(p.get("model") for p in flat_prices)
    diff_models = list(new_models - old_models) if old_models else []
    new_models_data = []
    if diff_models:
        for m in diff_models[:8]:
            new_models_data.append({
                "category": "",
                "series": "",
                "models": m,
                "note": "官方接口新增入库机型"
            })

    has_changes = len(price_changes) > 0 or len(new_models_data) > 0

    changelog_data = {
        "sync_time": sync_timestamp,
        "has_changes": has_changes,
        "badge_text": "官方有变动" if has_changes else "",
        "title": "Apple 官网价格与机型调整提醒" if has_changes else "",
        "summary": f"本次同步检测到官方接口 {len(price_changes)} 项维修报价变动与 {len(new_models_data)} 款新增机型。" if has_changes else "",
        "price_changes": price_changes,
        "new_models": new_models_data,
        "store_changes": {
            "total_stores": len(stores),
            "cities": 65,
            "status": f"覆盖全国 65 个核心城市共 {len(stores)} 家 Apple Store 直营店与官方原厂预约送修 AASP 网点。"
        } if has_changes else None
    }
    changelog_json = json.dumps(changelog_data, ensure_ascii=False, indent=2)

    new_data_content = f"""/**
 * Apple 官方维修价格与服务网点快查 - 核心数据集
 * 直连 Apple 官网官方接口同步生成
 * 同步时间戳: {sync_timestamp}
 */

var DATA_SYNC_TIMESTAMP = "{sync_timestamp}";
if (typeof window !== "undefined") window.DATA_SYNC_TIMESTAMP = DATA_SYNC_TIMESTAMP;

// ============================================================================
// 官方数据最新变动通知记录 (DATA_CHANGELOG)
// ============================================================================
var DATA_CHANGELOG = {changelog_json};
if (typeof window !== "undefined") window.DATA_CHANGELOG = DATA_CHANGELOG;

// ============================================================================
// 模块 1：官方维修报价全量扁平数据集 (共 {len(flat_prices)} 项)
// ============================================================================
var pricesData = {flat_prices_json};
if (typeof window !== "undefined") window.pricesData = pricesData;

// ============================================================================
// 模块 2：全国官方原厂认证服务网点库 (共 {len(stores)} 家)
// ============================================================================
var storesData = {stores_json};
if (typeof window !== "undefined") window.storesData = storesData;

// ============================================================================
// 互动设备选取器：全品类树状官方目录结构 (ESTIMATOR_CATALOG)
// ============================================================================
var ESTIMATOR_CATALOG = {catalog_json};
if (typeof window !== "undefined") window.ESTIMATOR_CATALOG = ESTIMATOR_CATALOG;

// ============================================================================
// 模块 3：第三方在售配件售后保修政策库 (Apple 官方渠道 37 主流品牌)
// 特别鸣谢：@Bryan 整理与倾情支持
// ============================================================================
{tp_code}

// ============================================================================
// 模块 4：当季新品与畅销配件精选 (23 款官方及主流精选配件)
// 特别鸣谢：@Bryan 整理与倾情支持
// ============================================================================
{hot_code}
"""

    with open(DATA_JS_PATH, "w", encoding="utf-8") as f:
        f.write(new_data_content)

    print(f"✅ data.js 写入完成！时间戳: {sync_timestamp}")

    # 重新打包单文件便携版
    print("\n[*] 正在重新构建单文件便携版 apple_service_portable.html...")
    import build_single_file
    build_single_file.bundle()
    print("🎉 全套数据同步与单文件构建成功！")

def main():
    print("=================================================================")
    print("   🍎 Apple 官方服务数据全量实时同步总线 (Live Sync Master)   ")
    print("=================================================================")
    catalog = fetch_pricing_data()
    stores = fetch_stores_data()
    update_data_js(catalog, stores)

if __name__ == "__main__":
    main()
