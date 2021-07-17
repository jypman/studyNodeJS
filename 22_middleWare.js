const express = require('express');
const http = require('http');
const port = 3000;
let app = express();

// 미들웨어를 함수형태로 정리하여 어떠한 미들웨어인지 구분 지어 놓는 방법도 있다.
var firstMiddleWare = (req, res, next) => {
    console.log('첫 번째 미들웨어');
    next();
}
// 모든 요청에 대해 실행하는 미들웨어
// app.use(firstMiddleWare);

// 해당 API에서만 실행되는 미들웨어
app.get('/', firstMiddleWare, (req, res, next) => {
    res.send('hello world!');
});

app.get('/user', (req, res, next) => {
    res.send('hello world!22222');
});

http.createServer(app).listen(port, () => {
    console.log(`${port}포트에서 서버가 작동하고 있습니당^^`);
});