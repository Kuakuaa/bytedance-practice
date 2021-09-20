const fs = require('fs');
const http = require('http');
http.createServer((request, response) => {
  console.log('This is a request');
  const {url, method} = request;
  if (url === '/' && method === "GET") {
    fs.readFile('./index.html',(err,data) => {
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
  } else {
    response.statusCode = 404;
    response.setHeader('Content-Type', 'text/plain;charset=utf-8');
    response.end("404 not found");
  }
})
  .listen(3000, () => {
    console.log('listen port 3000')
  })