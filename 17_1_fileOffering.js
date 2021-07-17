const http = require('http');
const fs = require('fs');
const port = 3000;

const server = http.createServer((req, res) => {
    // fs.readFile()은 비동기로 실행된다.
    // fs.readFile()의 첫번째 인자로 읽을 파일을 인자로 넘긴다.
    // fs.readFile()의 두번째 인자로 그 결과를 콜백함수로 넘긴다.
    fs.readFile('./dummy.html', (err, data) => {
        // 만약 없는 파일을 읽으려고 시도한다면 에러가 발생한다.
        if (err) {
            // 응답 에러객체를 조회하면 {code : 'ENOENT'}를 볼 수 있는데 이것은 "No such file or directory"를 의미한다.
            console.log(err);
            res.writeHead(500);
            res.end('server error');
        }
        // 해당 파일을 서버를 통해 브라우저에 뿌릴 수 있다.
        res.writeHead(200, {'Content-Type' : 'text/html'});
        // fs.readFile()로 파일을 읽으면 buffer 형태로 데이터를 읽기 때문에 문자열로 파싱해줘야 한다.
        res.end(data.toString());
    });
});
server.listen(port, () => {
    console.log(`${port}에서 서버가 작동하고 있습니당^^`)
});