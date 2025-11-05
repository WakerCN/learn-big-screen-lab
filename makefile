# 切换到 项目指定版本的Node.js
nvm-use:
	@echo "🔄 正在切换到 项目指定版本的Node.js"
	. ~/.nvm/nvm.sh && nvm use
	@echo "✅ 当前 Node.js 版本："
	@node --version

dev:
	make nvm-use;
	@echo "🚀 正在启动next应用..."
	npm run dev