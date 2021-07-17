const express = require('express');
const http = require('http');
const port = 3000;
let app = express();

// 각종 미들웨어 등록

// 라우터 중 하나 
app.get('/:id', (req, res, next) => {
    let id = req.params.id;
    if (id == 1) {
        next('error 발생');
    } else{
        res.send('hello world!!');
    };
});

// 각종 라우터 등록

// 에러 미들웨어
app.use((req, res, next) => {
    console.log('404');
    res.status(404).send('<h1>Not Found Page!!</h1>');
})
app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send(err);
});

// 해당 포트에서 서버 실행
http.createServer(app).listen(port, () => {
    console.log(`${port}포트에서 서버가 작동하고 있습니당^^`);
});