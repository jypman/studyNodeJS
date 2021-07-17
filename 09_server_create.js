const http = require('http');
const hostName = '127.0.0.1';
const port = 8080;

const server = http.createServer((req,res) => {
    console.log(req);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, myLife!!!');
});

server.listen(port, hostName, () => {
    console.log(`http://${hostName}:${port}/에서 서버가 작동하고 있어요^^`);
});