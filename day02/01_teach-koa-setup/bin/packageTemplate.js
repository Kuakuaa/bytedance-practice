import ejs from 'ejs';
import fs from 'fs';
import prettier from 'prettier';
import { fileURLToPath } from 'url';
import path from 'path';
// const ejs = require('ejs');
// const fs = require('fs');
// const prettier = require("prettier");

export function createPackageTemplate(config) {
  const __dirname = fileURLToPath(import.meta.url);

  const template = fs.readFileSync('./template/package.ejs', 'utf-8');
  
  const code = ejs.render(template, {
    router: config.middleware.router,
    static: config.middleware.static,
    packageName: config.packageName
  })
  return prettier.format(code, {
    parser: "json"
  })
};
// module.exports = {
//   createPackageTemplate
// }