import ejs from 'ejs';
import fs from 'fs';
import prettier from 'prettier';
// const ejs = require('ejs');
// const fs = require('fs');
// const prettier = require("prettier");

export function createIndexTemplate(config) {
  const template = fs.readFileSync('./template/index.ejs', 'utf-8');
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