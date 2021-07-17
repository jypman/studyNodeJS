const http = require('http');
const hostName = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    let {url, method} = req;
    switch (method) {
        // POST요청일 경우 case에서 POST로 바꿔주기만 하면 된다.
        // 하지만 body의 데이터를 받을 수 있는 것은 get을 제외한 것들이다.
        case 'GET':
            if (url === '/users') {
                // 한글로 응답을 할 때 각각 인코딩을 해야 한글이 깨지지 않는다.
                res.writeHead(200, {'Content-Type' : 'text/plain; charset=utf-8'});
                res.end('hello! users 접속!');
            }
            else if (url === '/boards') {
                res.writeHead(200);
                res.end('hello! boards access!');
            }
            else if (url === '/clothes') {
                res.writeHead(200, {'Content-Type' : 'text/plain; charset=utf-8'});
                res.end('hello! clothes 접속!');
            } 
            break;    
        default:
            res.statusCode = 404;
            res.end('NOT FOUND PAGE!!');
    }
});

server.listen(port, hostName, () => {
    console.log(`다음과 같은 포트에서 서버가 작동하고 있습니당^^ http://${hostName}:${port}/`);
})