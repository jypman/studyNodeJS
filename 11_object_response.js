const http = require('http');
const port = 3000;
const hostName = '127.0.0.1';

const server = http.createServer((req, res) => {
    let resData = '<html lang="ko"><body><h1>Hello!!!</h1></body></html>';
    // writeHead()의 첫번째 인자에는 응답코드를 의미하며 두번째 인자는 응답헤더를 의미한다.
    // 아래 두개의 주석에 있는 코드 대신 writeHead()로 간결하게 입력할 수 있다.
    // res.setHeader('Content-type', 'text/plain');
    // res.statusCode = 200;
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(resData);
});
server.listen(port, hostName, () => {
    console.log(`다음과 같은 포트로 서버가 작동하고 있습니당^^ http://${hostName}:${port}/`);
});