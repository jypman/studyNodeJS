const http = require('http');
const hostname = '127.0.0.1'
const port = 3000;

const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello, my Life!');
});
server.listen(port, hostname, () => {
    console.log(`호스트명은 ${hostname}이며 서버는 ${port}포트에서 작동하고 있습니당`);
});