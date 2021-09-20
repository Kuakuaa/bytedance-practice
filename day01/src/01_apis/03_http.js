const fs = require('fs');
const http = require('http');
http.createServer((request, response) => {
  console.log('This is a request');
  const { url, method, headers } = request;
  if (url === '/' && method === "GET") {
    fs.readFile('./index.html', (err, data) => {
      if (err) {
        response.writeHead(500, {
          'Content-Type': 'text/plain;charset=utf-8'
        })
        response.end("500 服务器挂了");
        return;
      }
      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/html');
      response.end(data);
    })
  } else if (url === '/users' && method === 'GET') {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify({ name: 'tom' }));
  } else if (method === 'GET' && headers.accept.indexOf('image/*') !== -1) {
    console.log("zhe");
    // 直接用 readFile 读取 是否 ok 把全部图片内容加载到服务器
    // stream 流 url /1.png => ./1.png
    fs.createReadStream('.'+url).pipe(response);
  } else {
    response.statusCode = 404;
    response.setHeader('Content-Type', 'text/plain;charset=utf-8');
    response.end("404 not found");
  }
})
  .listen(3000, () => {
    console.log('listen port 3000')
  })