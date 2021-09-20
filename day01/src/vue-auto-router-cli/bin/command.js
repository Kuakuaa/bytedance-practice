#!/usr/bin/env node
console.log("command hello cli");
const program = require('commander');
// 策略模式
program.version(require('../package.json').version);
try {
  program.command('init <name>')
  .description('init project')
  .action(require('../lib/init'));
}catch(err) {
  console.log("err");
  console.log(err);
}
program.parse(process.argv);