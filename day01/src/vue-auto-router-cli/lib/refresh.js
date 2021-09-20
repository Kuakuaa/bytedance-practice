// 读文件列表
// 拼代码 模板渲染的方式
const fs = require('fs');
const handlebars = require('handlebars');
const chalk = require('chalk');
module.exports = async () => {
  // 获取列表
  // console.log(fs.readdirSync("./vue-template/src/views"));
  const list = fs.readdirSync("./vue-template/src/views")
    .filter(v => v !== "Home.vue")
    .map(v => ({
      name: v.replace('.vue', '').toLowerCase(),
      file: v
    }));

  // 生成路由定义
  compile({ list }, './vue-template/src/router.js', './vue-template/template/router.js.hbs');
  // 生成菜单
  compile({ list }, './vue-template/src/App.vue', './vue-template/template/App.vue.hbs');

  /**
   * 
   * @param {*} meta 数据定义
   * @param {*} filePath 目标文件
   * @param {*} templatePath 模板
   */
  function compile(meta, filePath, templatePath) {
    if (fs.existsSync(templatePath)) {
      const content = fs.readFileSync(templatePath).toString();
      const result = handlebars.compile(content)(meta);
      fs.writeFileSync(filePath, result);
      console.log(chalk.green(`${filePath} 创建成功`));
    }
  }
}