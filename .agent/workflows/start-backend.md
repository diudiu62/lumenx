---
description: 重启该项目的后端
---

执行 kill $(lsof -t -i:17177) 2>/dev/null; sleep 1; ./start_backend.sh 命令，杀掉原后端并重启后端。