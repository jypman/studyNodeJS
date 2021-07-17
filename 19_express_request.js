const express = require('express');
const http = require('http');
const port = 3000;
let app = express();

// post요청에 대해 조회하려면 body-parser를 미들웨어로 등록해야 한다
const bodyParser = require('body-parser'); // 모듈 호출
app.use(bodyParser()); // 미들웨어 등록


app.get('/user/:id', (req, res, next) => {
    let params = req.params;
    let querys = req.query;
    console.log(params, querys);
    res.send('hello world!');
});

app.post('/', (req, res, next) => {
    let body = req.body;
    console.log(body);
    res.send('/post request');
});

http.createServer(app).listen(port, () => {
    console.log(`${port}에서 서버가 작동하고 있습니당^^`);
});
