const http = require('http');
const fs = require('fs');
const port = 3000;

const server = http.createServer((req, res) => {
    // 사용자가 요청하는 파일을 서버를 통해 브라우저에 뿌릴 수 있다.
    let{url} = req;
    fs.readFile('./jypman'+ url, (err, data) => {
    // 지정한 파일을 서버를 통해 브라우저에 뿌릴 수 있다. 
    // fs.readFile('./jypman/myLife.html', (err, data) => {
        if (err) {
            console.log(err);
            res.writeHead(500);
            res.end('server error');
        };
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.end(data);
    });
});
server.listen(port, () => {
    console.log(`${port}에서 서버가 작동하고 있습니당^^`)
});