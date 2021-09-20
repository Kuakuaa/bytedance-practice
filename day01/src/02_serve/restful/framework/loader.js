const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const {promisify} = require('util');
const readFile = promisify(fs.readFile);

// 加载器   文件
/**
 * 加载器
 * @param {*} dir 文件夹
 * @param {*} cb 回调
 */
async function load(dir, cb) {
  let url = path.resolve(__dirname, dir);
  // url = url.replace(/\\/g,'/') + '/user';
  // url = url + '\\user';
  console.log(`url=${url}`);
  console.log("读取开始");
  // const files = await readFile('../model/user');
  const files = fs.readFileSync(url);
  console.log("读取结束");
  files.forEach(filename => {
    filename = filename.replace('.js', '');
    const file = require(url + '/' + filename);
    cb(filename, file);
  })
}

const loadModel = config => app => {
  mongoose.connect(config.db.url, config.db.options);
  const conn = mongoose.connection;
  conn.on('error', () => console.error('数据库连接失败'));
  app.$model = {};
  load('../model', (filename, { sche }) => {
    console.log('load model:' + filename, schema);
    app.$model[filename] = mongoose.model(filename, schema);
  })
}

module.exports = {
  loadModel
}