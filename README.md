# CC Docs - Claude Code 源码学习文档

基于 [cc-haha](https://github.com/NanmiCoder/cc-haha)（Claude Code 泄漏版源码）的源码分析与学习文档站点。

## 关于本项目

本项目旨在通过对 Claude Code CLI 源码的系统性分析，帮助开发者理解其架构设计、核心机制与实现细节。内容涵盖：

- **架构总览** — 整体架构、上下文构建、状态管理、消息流
- **工具系统** — Task、Exec、Agent、MCP、File、Search 等工具的实现
- **服务层** — Session/Memory、API、MCP、Compact 等核心服务
- **Hooks 机制** — React Hooks 与 Shell Hooks 的工作原理
- **智能体开发** — Tool 开发、Agent 工具、SDK 集成、Team 系统

## 声明

本项目的学习对象为 [cc-haha](https://github.com/NanmiCoder/cc-haha) 项目。本项目仅用于技术学习与研究目的，不包含任何原始源码，所有内容均为对源码的分析与解读。

Claude Code 的版权归 Anthropic 所有。

## 技术栈

- [Next.js 15](https://nextjs.org) + [Nextra 4](https://nextra.site) (nextra-theme-docs)
- Markdown / MDX 编写内容
- Shiki 代码高亮（Dracula / GitHub Light 双主题）

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器 (端口 4000)
npm run dev

# 构建
npm run build

# 生产模式运行
npm start
```

## 内容结构

```
content/
├── index.mdx           # 首页
├── guide/              # 项目概览与核心概念
├── architecture/       # 架构分析
├── tools/              # 工具系统
├── services/           # 服务层
├── hooks/              # Hooks 机制
└── agent-dev/          # 智能体开发
```

## License

[MIT](./LICENSE)
