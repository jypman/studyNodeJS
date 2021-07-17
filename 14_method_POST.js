const http = require('http');
const qs = require('querystring');
const hostName = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    switch (req.method) {
        case 'POST':
            let body = '';
            req.on('data', (chunk) => {
                console.log(chunk);
                // 사용자가 전송한 데이터(쿼리스트링)가 buffer형식으로 chunk라는 매개 변수에 들어온다.
                // 데이터를 문자열인 ''와 덧셈 연산을 하면 데이터가 문자형으로 자료형 변환이 되어 문자열 데이터를 받을 수 있다.
                body += chunk;
                // 문자열 데이터를 조회할 수 있다.
                console.log(body);
            });
            req.on('end', () => {
                // qs.parse()는 인자에 들어가 있는 문자열인 데이터(쿼리스트링)를 객체로 파싱해준다.
                const obj = qs.parse(body);
                // body안에 들어간 데이터가 객체로 바뀐 것을 조회하기
                console.log(obj);
                res.writeHead(200);
                console.log(JSON.stringify(obj));
                res.end(JSON.stringify(obj));
            });
            req.on('error', (err) => {
                console.error(err.stack);
            });
            break;
        default:
            res.end();
    };
});

server.listen(port, hostName, () => {
    console.log(`다음 url에서 서버가 작동하고 있습니다. http://${hostName}:${port}/`)
});