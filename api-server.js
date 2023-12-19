const http = require('http');
const url = require('url');

let counter = 0;

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  console.info(`Request ${req.method} ${req.url}`);

  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const queryParams = parsedUrl.query;
  if (path === '/') {
    if (queryParams.fail === 'true') {
      res.statusCode = 500;
      return res.end(JSON.stringify({message: 'this failed by intent'}));
    }
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ count: ++counter, ...queryParams }));
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found\n');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
