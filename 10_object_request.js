// 15_method_POST.js와 같이 이 파일에서 post로 요청받을 때의 방식과 비슷하다.
// 15_method.js에서는 body+=chunk로 burffer 형식의 데이터를 문자열로 바꾸었다.
const http = require('http');
const port = 3000;

const server = http.createServer((req,res) => {
    // 요청객체는 상당히 많은 정보를 가지고 있기 때문에 필요한 것만 갖고와서 변수에 할당한다.
    let{url, method, headers} = req;
    let body = {};
    // 클라이언트에서 요청할 때마다 아래의 콘솔로그가 찍힌다.
    console.log('요청 url: ',url, '\n요청 method: ', method, '\n요청 headers: ', headers);
    // 클라이언트에서 post를 통해 body에 데이터를 담아서 요청을 했을 경우 발동되는 이벤트가 'data'다.
    // body 데이터를 콜백함수의 인자로 받으며 인자를 임의의 이름인 chunk로 설정함.
    req.on('data', chunk => {
        console.log(chunk);
        // body 데이터를 콜백함수의 인자로 받으면 버퍼 형태로 받기 때문에 문자열로 파싱해야 한다.
        console.log(chunk.toString());
        // 클라이언트가 전송한 body는 key=value형태로 있기 때문에 사용하기 편하도록 json형태로 바꿔준다.
        chunk.toString().split('&').map( item => {
            let s = item.split('=');
            let key = s[0];
            let value = s[1];
            body[key] = value;
        });
    });
    // 파싱이 끝나면 end 이벤트를 실행시킨다.
    req.on('end', () => {
        console.log(body);
    });
    // 데이터를 처리하는 중 에러가 발생하면 이벤트가 발생하는 error 이벤트 관련 코드를 호출시킨다.
    req.on('error', err => {
        console.log(err);
    })
    res.writeHead(200);
    res.end('my Life is so good!!');
});
server.listen(port, () => {
    console.log(`${port}에서 서버가 작동하고 있습니다.`);
});