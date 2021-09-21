const Koa = require("koa");
const fs = require('fs');
const path = require('path');
const app = new Koa();
app.use((ctx) => {
  const url = ctx.request.url;

  console.log(url);

  if (url === '/') {
    // 加载 html
    ctx.body = fs.readFileSync('./index.html', 'utf-8');
  } else if (url.endsWith('.js')) {
    // 找到对应的路劲 去加载 然后返回非浏览器
    const p = path.resolve(__dirname, url.slice(1));

    ctx.type = 'text/javascript';

    const source = fs.readFileSync(p, 'utf-8');

    ctx.body = rewriteImport(source);

    // ctx.body = fs.readFileSync(p, 'utf-8');
  } else if (url.startsWith("/@modules")) {
    // 应该去 node_modules 里面查找
    const moduleName = url.replace("/@modules", "");
    // url -> vue
    const prefix = __dirname + "/node_modules" + moduleName;
    console.log("prefix=", prefix);
    const module = require(prefix + "/package.json").module;

    const code = fs.readFileSync(path.resolve(prefix, module), 'utf-8');
    ctx.type = "text/javascript";
    ctx.body = rewriteImport(code)
  }
});

function rewriteImport(source) {
  return source.replace(/(from\s+["|'])(?![\.\/])/g, "$1/@modules/")
    .replace(/process\.env\.NODE_ENV/g, '"development');
}

app.listen(8080, ctx => {
  console.log("Serve at 8080");
})