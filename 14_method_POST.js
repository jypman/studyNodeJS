const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
    let {url, method} = req;
    let body = {};
    // post 요청 시 body를 실어서 보냈다는 이벤트를 감지하는 것이 req.on('data',() =>{})이다.
    req.on('data', chunk => {
        chunk.toString().split('&').map(item => {
            let s = item.split('=');
            let key = s[0];
            let value = s[1];
            body[key] = value;
        });
    });
    // req.on('end', function(){})은 비동기로 실행된다.
    // body 데이터 파싱이 끝난 후 요청에 대한 처리를 하려면 해당 로직을 콜백 함수 안에 넣어준다.
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