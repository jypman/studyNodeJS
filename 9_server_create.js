const http = require('http');
const hostName = '127.0.0.1';
const port = 3000;

const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, myLife!!!');
});

server.listen(port, hostName, () => {
    console.log(`https://${hostName}:${port}/에서 서버가 작동하고 있어요^^`);
});