import ejs from 'ejs';
import fs from 'fs';
import prettier from 'prettier';
import path from 'path';
// const ejs = require('ejs');
// const fs = require('fs');
// const prettier = require("prettier");

export function createIndexTemplate() {
  const template = fs.readFileSync(path.resolve('bin/template/index.ejs').replace(/\\/g,'/'), 'utf-8');
  const code = ejs.render(template, {
    router: false
  })
  return prettier.format(code, {
    parser: "babel"
  })
};
// module.exports = {
//   createIndexTemplate
// }