const express = require('express');
const http = require('http');
const port = 3000;
let app = express();

app.get('/', (req, res, next) => {
    res.send('hello world!!');
});

http.createServer(app).listen(port, () => {
    console.log(`${port}에서 서버가 작동하고 있습니당^^`);
});