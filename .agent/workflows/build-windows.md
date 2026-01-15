---
description: Windows 应用构建流程
---

# Windows 应用构建 Workflow

此 Workflow 用于在 Windows 上构建打包应用（.exe）。

## 前置条件

确保已安装以下工具：
- Python 3.8+
- Node.js + npm/yarn
- FFmpeg（添加到系统 PATH）

## 构建步骤

1. 在 PowerShell 中进入项目根目录：
```powershell
cd C:\path\to\tron-comic
```

2. 执行构建脚本（此步骤耗时较长，约 5-10 分钟）：
```powershell
.\build_windows.ps1
```

**构建流程**：
- 构建前端 → 创建虚拟环境 → 安装依赖 → 准备 FFmpeg → PyInstaller 打包

## 输出位置

构建成功后，输出文件位于：
- `dist_windows\TronComic.exe` - Windows 可执行文件

## 测试应用

3. 双击运行 `dist_windows\TronComic.exe` 测试应用。

## 常见问题

**Q: 构建失败提示 FFmpeg 未找到**
A: 下载 FFmpeg 并添加到系统 PATH，或手动放置 `ffmpeg.exe` 到 `bin\` 目录。

**Q: PowerShell 执行策略错误**
A: 以管理员身份运行 PowerShell，执行 `Set-ExecutionPolicy RemoteSigned` 后重试。

**Q: WebView2 相关错误**
A: Windows 用户首次运行可能需要安装 Edge WebView2 Runtime。
