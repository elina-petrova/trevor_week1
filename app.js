const http = require('http');

// require is more or less the same as s JS import
// or the same as require in php 

const hostname = '127.0.0.1'; // this is localhost
const port = 3000; // localhost:3000

// method
// 
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('I want to suck a dick');
});

//spy on the port, look for requests 
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});