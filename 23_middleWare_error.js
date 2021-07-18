const express = require('express');
const http = require('http');
const port = 3000;
let app = express();

// 각종 미들웨어 등록

// 라우터 중 하나 
app.get('/:id', (req, res, next) => {
    let id = Number(req.params.id);
    if (id === 1) next('error가 발생했어여 ㅠ');
    else res.send('hello world!!');
});

// 아래의 경우 각종 미들웨어가 등록되어 있다.

// 위 일치하는 라우터가 없을 경우 아래의 미들웨어가 실행된다.
// 에러 미들웨어에서 첫번째 인자 err에는 위의 next()의 인자 값이 들어온다.
app.use((err,req, res, next) => {
    console.log(err);
    res.status(404).send(err);
});

// 해당 포트에서 서버 실행
http.createServer(app).listen(port, () => {
    console.log(`${port}포트에서 서버가 작동하고 있습니당^^`);
});