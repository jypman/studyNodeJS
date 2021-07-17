// 15_method_POST.js와 같이 이 파일에서 post로 요청받을 때의 방식과 비슷하다.
// 15_method.js에서는 body+=chunk로 burffer 형식의 데이터를 문자열로 바꾸었다.
const http = require('http');
const port = 3000;

const server = http.createServer((req,res) => {
    let{url,method,headers} = req;
    let body = {};
    console.log(url,method);

    req.on('data', (chunk) => {
        console.log(chunk);
        console.log(chunk.toString());
        
        chunk.toString().split('&').map( (item) => {
            let s = item.split('=');
            let key = s[0];
            let value = s[1];
            body[key] = value;
        });
    });
    req.on('end', () => {
        console.log(body);
    });
    req.on('error', (err) => {
        console.log(err);
    })
    res.writeHead(200);
    res.end('my Life is so good!!');
});
server.listen(port, () => {
    console.log(`${port}에서 서버가 작동하고 있습니다.`);
});