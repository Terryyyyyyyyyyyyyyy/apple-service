#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Apple 官方服务快查 - 单文件便携版打包脚本 (Single-File Bundler)
=====================================================
将 HTML、CSS、数据、JS 逻辑与高清图标全部打包整合为一个独立的 .html 文件。
方便通过微信、AirDrop、邮件发送给朋友，在手机上零配置秒开并支持离线访问与添加到主屏幕！
"""

import os
import re
import base64

DIR = os.path.dirname(os.path.abspath(__file__))
INDEX_HTML = os.path.join(DIR, "index.html")
STYLE_CSS = os.path.join(DIR, "style.css")
DATA_JS = os.path.join(DIR, "data.js")
APP_JS = os.path.join(DIR, "app.js")
ICON_SVG = os.path.join(DIR, "icon.svg")
OUTPUT_HTML = os.path.join(DIR, "apple_service_portable.html")

def bundle():
    with open(INDEX_HTML, "r", encoding="utf-8") as f:
        html = f.read()

    with open(STYLE_CSS, "r", encoding="utf-8") as f:
        css = f.read()

    with open(DATA_JS, "r", encoding="utf-8") as f:
        data_js = f.read()

    with open(APP_JS, "r", encoding="utf-8") as f:
        app_js = f.read()

    # 将 icon.svg 与 apple-touch-icon.png 转为 base64 data URI
    touch_icon_png = os.path.join(DIR, "apple-touch-icon.png")
    if os.path.exists(touch_icon_png):
        with open(touch_icon_png, "rb") as f:
            png_b64 = base64.b64encode(f.read()).decode("utf-8")
        png_data_uri = f"data:image/png;base64,{png_b64}"
        html = re.sub(r'<link rel="apple-touch-icon"[^>]*>', f'<link rel="apple-touch-icon" sizes="180x180" href="{png_data_uri}">', html)

    if os.path.exists(ICON_SVG):
        with open(ICON_SVG, "rb") as f:
            icon_b64 = base64.b64encode(f.read()).decode("utf-8")
        icon_data_uri = f"data:image/svg+xml;base64,{icon_b64}"
        html = re.sub(r'<link rel="icon" type="image/svg\+xml"[^>]*>', f'<link rel="icon" type="image/svg+xml" href="{icon_data_uri}">', html)

    # 替换样式表为内联样式
    style_tag = f"<style>\n/* Apple Service Styles */\n{css}\n</style>"
    html = re.sub(r'<link rel="stylesheet" href="style\.css(?:\?[^"]*)?">', style_tag, html)

    # 替换外链脚本为内联脚本
    script_bundle = f"<script>\n/* 核心数据集 data.js */\n{data_js}\n\n/* 应用逻辑 app.js */\n{app_js}\n</script>"
    html = re.sub(r'<script src="data\.js(?:\?[^"]*)?"></script>\s*<script src="app\.js(?:\?[^"]*)?"></script>', script_bundle, html)

    with open(OUTPUT_HTML, "w", encoding="utf-8") as f:
        f.write(html)

    size_kb = os.path.getsize(OUTPUT_HTML) / 1024
    print(f"🎉 单文件便携版生成成功！")
    print(f"   输出文件: {os.path.basename(OUTPUT_HTML)} ({size_kb:.1f} KB)")
    print(f"   特性: 零依赖、单文件、微信/隔空投送秒发、手机上永久离线可用！")

if __name__ == "__main__":
    bundle()
