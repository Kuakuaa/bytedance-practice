import fs from 'fs';
import inquirer from 'inquirer';
import execa from 'execa';
import { createIndexTemplate } from './indexTemplate.js';
import { createPackageTemplate } from './packageTemplate.js';
const answer = await inquirer.prompt([
  // nodejs esm 顶层不需要加 async
  { type: "input", name: "packageName", message: "set package name" },
  {
    type: "number",
    name: 'port',
    message: "set port number",
    default: () => 8080,
  },
  {
    type: "checkbox",
    name: "middleware",
    choices: [
      {
        name: "koaStatic",
      },
      {
        name: "koaRouter",
      }
    ]
  }

])
console.log(answer);

const inputConfig = {
  packageName: "koa-setup-test",
  port: 8080,
  middleware: {
    router: true,
    static: true
  }
}

// 核心自动化思维
// 1.删除文件夹，并创建新文件夹 (项目名)
if (fs.existsSync('test')) {
  await execa('npm run del');
  fs.mkdirSync('test');
} else {
  fs.mkdirSync('test');
}
// 2. 创建了 index.js
fs.writeFileSync(getRootPath() + "/index.js", createIndexTemplate());

// 3.创建了 package.json
// 练习点：基于数据生成 package.json
fs.writeFileSync(getRootPath() + '/package.json', createPackageTemplate(answer));

// 4.安装依赖
// TODO package -> yarn
execa('npm i', {
  cwd: getRootPath(),
  stdio: [2, 2, 2],
})

function getRootPath() {
  return './test';
}