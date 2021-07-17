const express = require('express');
let app = express();

const http = require('http');
const port = 3000;

app.get('/', (req, res, next) => {
    res.send('hello world!!');
});

app.post('/', (req, res, next) => {
    res.send('/ post 요청');
});

app.get('/users', (req, res, next) => {
    res.send('/users get 요청');
});

app.post('/users', (req, res, next) => {
    res.send('/users post 요청');
});

http.createServer(app).listen(port, () => {
    console.log(`${port}에서 서버가 작동하고 있습니당^^`);
});