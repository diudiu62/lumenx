---
description: macOS 应用构建流程
---

# macOS 应用构建 Workflow

此 Workflow 用于在 macOS 上构建打包应用（.app 和 .dmg）。

## 前置条件

确保已安装以下工具：
- Python 3.8+
- Node.js + npm/yarn
- FFmpeg (`brew install ffmpeg`)

## 构建步骤

// turbo
1. 确保在项目根目录：
```bash
cd /Users/hoshinoren/Documents/code/project/video_gen/gitlab/tron-comic
```

// turbo
2. 确保构建脚本有执行权限：
```bash
chmod +x build_mac.sh
```

3. 执行构建脚本（此步骤耗时较长，约 5-10 分钟）：
```bash
./build_mac.sh
```

**构建流程**：
- 构建前端 → 创建虚拟环境 → 安装依赖 → 准备 FFmpeg → PyInstaller 打包 → 创建 DMG

## 输出位置

构建成功后，输出文件位于：
- `dist_mac/云创AI漫剧.app` - macOS 应用
- `dist_mac/云创AI漫剧.dmg` - DMG 安装包（推荐分发）

## 测试应用

// turbo
4. 打开构建好的应用测试：
```bash
open dist_mac/云创AI漫剧.app
```

## 常见问题

**Q: 构建失败提示 FFmpeg 未找到**
A: 运行 `brew install ffmpeg` 安装后重试。

**Q: DMG 创建失败**
A: 检查是否有同名 DMG 已挂载，运行 `hdiutil detach /Volumes/云创AI漫剧` 后重试。
