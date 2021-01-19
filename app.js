const http = require('http');
const stream = require('fs');

// require is more or less the same as s JS import
// or the same as require in php 

// const hostname = '127.0.0.1'; // this is localhost
const port = process.env.PORT || 3000; // localhost:3000

// method
// 
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  let url = req.url; // localhost:3000/contact -> adress bar

  switch (url) {
    // case "/": - index page; root of the project

    case "/contact":
      stream.readFile('contact.html', null, ((err, data) => {
        if(err){
          res.writeHead(404);
          res.write('404 not found');
        } else {
          res.write(data);
        }
      }))
      break;
      case "/portfolio":
      stream.readFile('portfolio.html', null, ((err, data) => {
        if(err){
          res.writeHead(404);
          res.write('404 not found');
        } else {
          res.write(data);
        }
      }))
      break;

      default:
        res.end('hi'); // serve up a custom error page
  }

  // res.end('hi');
});

//spy on the port, look for requests 
server.listen(port, () => {
  console.log(`Server is now running at ${port}/`);
});