---
description: 安全的 Git 提交流程 - 提交代码到功能分支
---

# Git 安全提交 Workflow

此 Workflow 用于将代码安全地提交到功能分支，确保不泄露敏感信息。

## 前置检查

// turbo
1. 检查当前分支（确保不在 main 分支上直接开发）：
```bash
git branch --show-current
```
**预期结果**: 输出应为 `feature/*` 格式的分支名，**不应为 `main`**。

// turbo  
2. 检查是否有敏感文件被意外追踪：
```bash
git ls-files | grep -E "\.env$|secret|credential|\.key$" | grep -v "\.example"
```
**预期结果**: 输出为空或只包含 `.env.example` 等示例文件。

// turbo
3. 检查 `.gitignore` 是否包含关键忽略规则：
```bash
grep -E "^\.env|^\.env\.local" .gitignore
```
**预期结果**: 输出包含 `.env` 和 `.env.local`。

## 提交流程

4. 查看待提交的更改：
```bash
git status
```
**手动检查**: 确认列表中**没有**包含 `.env`、`*secret*`、`*credential*`、`*.key` 等敏感文件。

5. 使用 git_push.sh 脚本提交（交互式）：
```bash
./git_push.sh
```
**或** 使用带消息的快速提交：
```bash
./git_push.sh "feat: 你的提交信息"
```

## 创建/切换分支

6. 创建新功能分支：
```bash
./git_push.sh -n new-feature-name
```

7. 切换到已有分支：
```bash
./git_push.sh -s branch-name
```

## 合并到 Main 分支（需谨慎）

> [!CAUTION]
> 合并到 main 分支前，请确保：
> 1. 功能已完成并测试
> 2. 已通过代码审查
> 3. 没有敏感信息泄露

8. 通过 GitLab/GitHub 创建 Merge Request / Pull Request 进行合并，**不要直接 push 到 main**。

## 紧急情况：撤销敏感信息提交

如果不慎提交了敏感信息：

9. 如果还未 push，撤销最近一次提交：
```bash
git reset --soft HEAD~1
```

10. 如果已经 push，需要使用 BFG Repo-Cleaner 或 git filter-branch 清理历史，并强制推送。**请联系团队协助处理**。
