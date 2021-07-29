// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// var app = require('http').createServer(response);
// var fs = require('fs');
// const hostname = '127.0.0.1';
// const port = 3000;

// // app.listen(3000);
// console.log("running");

// function response(req, res) {
//   fs.readFile(__dirname + 'Resume_Site/index.html');
//   res.statusCode = 200;
//   res.end("hi world");
// }

var fs = require('fs'),
    http = require('http');

http.createServer(function (req, res) {
  fs.sendFile(__dirname+"index.html", function (err,data) {
    if (err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
    }
    res.writeHead(200);
    res.end(data);
  });
}).listen(8080);
















// var static = require('node-static');
// var http = require('http');

// var file = new(static.Server)(__dirname);

// http.createServer(function (req, res) {
//   file.serve(req, res);
// }).listen(8080);