# day-01 代码和笔记

## 上午



### 自建cli

[bin文档](https://docs.npmjs.com/cli/v7/configuring-npm/package-json#bin)、[link文档](https://docs.npmjs.com/cli/v6/commands/npm-link)

1. 创建文件 `command.js`
2. 在 `package.json` 添加 `"bin": { 'commandcli': './bin/command.js'}`
3. 使用`npm link`命令，将npm 模块链接到对应的运行项目

- 下载依赖
通过 spawn 进行