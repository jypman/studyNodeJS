const http = require('http');
const hostName = '127.0.0.1';
const port = 3000;

const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('content-type', 'text/plain');
    res.end('hello! Node.js HTTP Server');
});

server.listen(port, hostName, () => {
    console.log(`서버는 다음과 같은 url에서 작동하고 있습니당^^ http://${hostName}:${port}/`);
});

// http.get()함수는 첫번쨰 인자 값에 있는 url을 요청하는 함수를 의미한다.
// http.get()함수는 통신방식이 GET일 때 사용한다.
// 보통 http.request()을 통해 요청하지만 body 데이터 전송 없이 간단하게 GET으로 요청할 수 있다.
// 응답 객체가 콜백의 인자로 전달된다.
http.get('http://localhost:3000', (res) => {
    let data = '';
    res.on('data', (chunk) => {
        data += chunk;
        console.log('res.on의 data는 >>>', data); 
    });
    res.on('end', () => {
        try {
            console.log('res.on의 end는 >>>', data);
            return data;
        }catch (err) {
            if (err) {
                console.log(err);
            }
        }
    });
});