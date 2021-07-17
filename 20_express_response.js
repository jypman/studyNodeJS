const express = require('express');
const http = require('http');
const port = 3000;
let app = express();

app.get('/send', (req, res, next) => {
    res.send('hello send!!');
});

app.get('/download', (req, res, next) => {
    res.download('./jypman/myLife.txt');
});

app.get('/redirect', (req, res, next) => {
    res.redirect('/send');
});

app.get('/json', (req, res, next) => {
    res.json({ message : 'success', code : 0 });
});

app.get('/status', (req, res, next) => {
    res.status(201).json({ message : 'very good!' });
});

http.createServer(app).listen(port, () => {
    console.log(`${port}포트에서 서버가 작동하고 있습니당^^`)
})