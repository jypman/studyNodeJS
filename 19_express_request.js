const express = require('express');
let app = express();

// express에서 post 요청을 받을 때 body를 이용하려면 body-parser를 미들웨어로 등록해야 한다.
// body를 파싱하기 위해 on('data')로 이벤트를 감지하고 on('end')로 마무리하는 것을 body-parser가 대신 해준다.
const bodyParser = require('body-parser'); // 모듈 호출
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


const http = require('http');
const port = 3000;

app.get('/user/:jyp', (req, res, next) => {
    let params = req.params;
    let queries = req.query;
    console.log('params : ', params, '\nqueries : ', queries);
    res.send('hello world!');
});

app.post('/', (req, res, next) => {
    let body = req.body;
    console.log(body);
    res.send('/을 post로 요청');
});

http.createServer(app).listen(port, () => {
    console.log(`${port}에서 서버가 작동하고 있습니당^^`);
});
