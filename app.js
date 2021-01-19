const http = require('http');

// require is more or less the same as s JS import
// or the same as require in php 

// const hostname = '127.0.0.1'; // this is localhost
const port = process.env.PORT || 3000; // localhost:3000

// method
// 
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('hi');
});

//spy on the port, look for requests 
server.listen(port, () => {
  console.log(`Server is now running at ${port}/`);
});