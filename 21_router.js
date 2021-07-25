const express = require('express');
const http = require('http');
const port = 3000;
let app = express();

const users = require('./21_router_users.js');
const boards = require('./21_router_boards.js');

//엔드포인트가 /user면 users 모듈 호출
app.use('/users', users);
//엔드포인트가 /boards면 boards 모듈 호출
app.use('/boards', boards);

http.createServer(app).listen(port, () => {
    console.log(`${port}포트에서 서버가 작동하고 있습니다.`)
})