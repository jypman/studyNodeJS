const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
    let {url, method} = req;
    let body = {};
    req.on('data', chunk => {
        chunk.toString().split('&').map(item => {
            let s = item.split('=');
            let key = s[0];
            let value = s[1];
            body[key] = value;
        });
    });
    // req.on('end', function(){})은 비동기로 실행된다.
    // 데이터 파싱이 끝난 후 요청에 대한 처리가 실행되려면 요청에 대한 처리 부분을 해당 콜백 함수 안에 넣어준다.
    req.on('end', () => {
        for (let i = 0; i < 10; i++) {
            console.log(i)            
        }
        if (method === 'POST') {
            res.statusCode = 200;
            if (url === '/user') {
                console.log('HI!');
                res.end('/user add information');
            }
        } else {
            res.statusCode = 404;
            res.end('NOT FOUND PAGE!');
        }
    });
    req.on('error', (err) => {
        res.statusCode = 500;
        res.end('Server Error!');
    });
});

server.listen(port, () => {
    console.log(`${port}에서 서버가 작동하고 있습니다.`);
});