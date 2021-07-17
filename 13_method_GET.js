const http = require('http');
const url = require('url');
const hostName = '127.0.0.1';
const port = 3000;

const server = http.createServer((req,res) => {
    switch (req.method) {
        case 'GET':
            // req.url은 api로 요청된 url의 path정보다. 예) 도메인 혹은 IP주소 다음에 오는 /부터가 req.url의 값이다.
            if (req.url === '/') {
                res.setHeader('Content-Type', 'text/plain');
                res.writeHead(200);
                res.end('hello server');
            }
            else if(req.url.substring(0,5) === '/data'){
                // url 모듈의 parse()는 url문자열을 넣으면 url 객체를 반환한다.
                // 두번째인자는 필수가 아니지만 true를 넣어주면 url객체를 json형태로 받을 수 있다.
                // 조회하고 싶으면 아래 주석을 풀자!
                // console.log(url.parse(req.url, true));
                const queryParams = url.parse(req.url, true).query;
                res.setHeader('Content-Type', 'text/html');
                res.writeHead(200);
                //res.write()는 응답 코드를 응답 본문에 보낸다.
                //res.write()를 통해 응답 코드를 응답 본문에 넣고 마지막에 res.end()로 응답 전송을 완료하는 형식이다.
                res.write('<html lang="ko"><head><title>He did it!!!</title></head><body>');

                for (let key in queryParams) {
                    res.write(`<h1>${key}</h1>`);
                    res.write(`<h2>${queryParams[key]}</h2>`);
                }
                res.end('</body></html>');
            }
            break;
        // 조건문에 모두 해당되지 않을 경우 응답 전송을 바로 완료처리한다.
        default:
            res.end();
    }
});
server.listen(port, hostName, () => {
    console.log(` 디음과 같은 주소에서 서버가 작동하고 있어용^^ http://${hostName}:${port}`);
})