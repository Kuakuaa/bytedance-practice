// 打印欢迎界面
const { promisify } = require('util');
const figlet = promisify(require('figlet'));
const clear = require('clear');
const chalk = require('chalk');
const log = content => {
  console.log(chalk.green(content))
};
const open = require('open');
const { clone } = require('./download');
const spawn = async (...args) => {
  // 同步 Promise api
  const { spawn } = require('child_process');
  return new Promise(resolve => {
    const proc = spawn(...args);
    // 输出流 子进程 合并到主进程
    proc.stdout.pipe(process.stdout);
    proc.stderr.pipe(process.stderr);
    proc.on('close', () => {
      resolve();
    })
  })
}

module.exports = async name => {
  // 打印欢迎界面
  clear();
  const data = await figlet('Kuakuaa\'s init');
  log(data);

  // 项目模板
  log('项目模板' + name);
  // await clone('github:su37josephxia/vue-template',name);
  // 下载依赖 npm i
  // 子进程
  log(`O(∩_∩)O~安装依赖...`);
  log(chalk.green(`
  安装完成：
  To get Start:
  ==============================
    cd ${name}
    npm run serve
  ==============================
  `))
  open('http://localhost:8080');
  await spawn(process.platform === "win32" ? "npm.cmd" : 'npm', ['run', 'serve'], { cwd: `./${name}` });
}