# 📊 大屏适配学习项目

> 这是一个个人用于学习和实践大屏适配技术的项目。

## 📝 项目简介

本项目主要用于学习和探索大屏展示场景下的前端适配方案，包括但不限于：
- 响应式布局设计
- 大屏可视化适配
- 多种分辨率适配方案
- 性能优化实践

## 🛠️ 开发环境

### 必需环境

- **Node.js**: `22.x` （推荐使用 `.nvmrc` 中指定的版本）
- **包管理器**: `pnpm`

### 安装 Node.js

如果使用 `nvm` 管理 Node.js 版本，可以直接运行：

```bash
nvm use
```

或者手动安装 Node.js 22.x 版本。

### 安装依赖

```bash
# 安装 pnpm（如果尚未安装）
npm install -g pnpm

# 安装项目依赖
pnpm install
```

## 🚀 技术栈

- **框架**: Next.js `16.0.1`
- **UI 库**: React `19.2.0`
- **提交规范**: Commitlint + cz-git

## 📁 项目结构

```
learn-big-screen-lab/
├── .nvmrc              # Node.js 版本配置
├── commitlint.config.js # 提交规范配置
├── package.json        # 项目配置和依赖
├── pnpm-lock.yaml     # 依赖锁定文件
└── README.md          # 项目说明文档
```

## 📚 提交规范

本项目使用 [Commitlint](https://commitlint.js.org/) 和 [cz-git](https://cz-git.qbb.sh/) 来规范提交信息。

提交时可以使用以下命令：

```bash
git commit
```

这将启动交互式提交界面，帮助您按照规范格式提交代码。

## 📄 License

详见 [LICENSE](./LICENSE) 文件。

