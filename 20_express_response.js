const express = require('express');
let app = express();

const http = require('http');
const port = 3000;

app.get('/send', (req, res, next) => {
    res.send('hello send!!');
});

app.get('/sendHtml', (req, res, next) => {
    res.send('<h1>hello HTML!!</h1>');
});

app.get('/download', (req, res, next) => {
    res.download('./20_test.txt');
});

app.get('/redirect', (req, res, next) => {
    res.redirect('/send');
});

app.get('/json', (req, res, next) => {
    res.json({ message : 'success', code : 0 });
});

app.get('/status', (req, res, next) => {
    // res.status()는 응답코드를 임의로 변경할 때 사용한다.
    res.status(201).json({ message : 'statusCode is 201' });
});

http.createServer(app).listen(port, () => {
    console.log(`${port}포트에서 서버가 작동하고 있습니당^^`)
})