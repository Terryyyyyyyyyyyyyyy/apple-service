#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Apple 官方服务快查 - 本地后台服务 (Local Server)
=====================================================
提供轻量级本地 Web 服务与一键抓取同步接口：
- 静态网页服务: http://localhost:8080
- 同步触发接口: POST /api/sync (网页点击按钮直接调用，后台实时抓取官网并刷新数据)
"""

import sys
import os
import json
import time
import webbrowser
import threading
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

# 导入同步主逻辑
import update_stores

PORT = 8080
DIR = os.path.dirname(os.path.abspath(__file__))

class AppleLocalHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIR, **kwargs)

    def do_POST(self):
        if self.path == "/api/sync":
            print("\n[Web 触发] 收到网页端【立即同步官网数据】请求，正在后台连接 Apple 官网接口抓取...")
            try:
                # 执行抓取主函数
                update_stores.main()

                # 读取更新后的数据
                with open(update_stores.DATA_JS_PATH, "r", encoding="utf-8") as f:
                    content = f.read()

                # 提取 storesData 注入返回
                import re
                m = re.search(r"var storesData = (\[.*?\]);", content, re.DOTALL)
                stores_data = json.loads(m.group(1)) if m else []

                # 响应成功
                self.send_response(200)
                self.send_header("Content-Type", "application/json; charset=utf-8")
                self.send_header("Access-Control-Allow-Origin", "*")
                self.end_headers()
                
                resp_payload = {
                    "success": True,
                    "message": "官网数据同步成功",
                    "timestamp": time.strftime("%Y-%m-%d %H:%M:%S"),
                    "storesData": stores_data
                }
                self.wfile.write(json.dumps(resp_payload, ensure_ascii=False).encode("utf-8"))
                print(f"[Web 触发] ✅ 官网数据同步完成并已返回网页端 (共 {len(stores_data)} 家门店)！\n")
            except Exception as e:
                print(f"[Web 触发] ❌ 同步出错: {e}\n")
                self.send_response(500)
                self.send_header("Content-Type", "application/json; charset=utf-8")
                self.send_header("Access-Control-Allow-Origin", "*")
                self.end_headers()
                self.wfile.write(json.dumps({"success": False, "error": str(e)}).encode("utf-8"))
        else:
            self.send_error(404, "File not found")

    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "POST, GET, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()

def run_server():
    server = ThreadingHTTPServer(("0.0.0.0", PORT), AppleLocalHandler)
    print("=" * 65)
    print(f"  🍎 Apple 官方服务快查本地服务已启动！")
    print(f"  🌐 本机访问: http://127.0.0.1:{PORT}")
    print(f"  📱 同局域网手机访问: http://192.168.2.129:{PORT}")
    print(f"  💡 特性说明: 在网页上点击【立即同步官网数据】按钮即可在后台一键抓取！")
    print("=" * 65)
    print("按 Ctrl+C 可停止本地服务。\n")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\n本地服务已退出。")
        server.server_close()

if __name__ == "__main__":
    run_server()
