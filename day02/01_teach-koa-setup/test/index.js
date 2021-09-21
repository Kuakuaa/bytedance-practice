const Koa = require("koa");
const Router = require("koa-router");
const serve = require("koa-static");
const views = require("koa-views");
const koaBody = require("koa-body");
const app = new Koa();

const router = new Router();

router.get("/", (ctx) => {
  ctx.body = "Hello koa-setup-test";
});
app.use(router.routes());

app.listen(8080, () => {
  console.log("Serve at 8080");
});
