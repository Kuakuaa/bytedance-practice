const fs = require('fs');
const router = require('koa-router')();
const { init, get, create, update, del, list } = require('./api');

router.get('/api/:list/:id', init, get);
router.get('/api/:list', init, list);
router.post('/api/:list', init, create);
router.put('/api/:list/:id', init, update);
router.delete('/api/:list/:id', init, del);
router.get('/', async (ctx,next) => {
  ctx.response.type='text/html';
  ctx.response.body = '<h1>Hello, Kuakuaa!</h1>';
})
router.get('/home', async (ctx,next) => {
  const file = fs.readFileSync('./index.html');
  ctx.response.type='text/html';
  ctx.response.body = file;
})


module.exports = router.routes();