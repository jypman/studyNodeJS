const http = require('http');
const port = 3000;
const hostName = '127.0.0.1';

const server = http.createServer((req, res) => {
    let resData = '<html><body><h1>Hello!!!</h1></body></html>';
    // 아래 두개의 주석에 있는 코드 대신 그 아래의 한 문장의 간결한 코드로 입력할 수 있다.
    // res.setHeader('Content-type', 'text/plain');
    // res.statusCode = 200;
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(resData);
});
server.listen(port, hostName, () => {
    console.log(`다음과 같은 포트로 서버가 작동하고 있습니당^^ http://${hostName}:${port}/`);
});