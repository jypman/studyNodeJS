const http = require('http');
const port = 3001;

const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
let app = express();

const mysql = require('mysql');

let db = mysql.createConnection({
    host : '127.0.0.1',
    port : '3306',
    user : 'root',
    password : process.env.DATABASE_PASSWORD,
    database : 'boards'
})

db.connect();

app.get('/users', (req,res) => {
    let userId = req.query.id
    let sql = `select * from users where id = ${userId}`;
    db.query(sql, (err, data) => {
        console.log('userId : ',userId)
        console.log(data)
        res.json(data);
    })
})

app.get('/boards', (req, res) => {
    let sql = 'select * from boards where id= ? and title=? and content = ?';
    db.query(sql, [1,'게시글1', '내용1'], (err, data) => {
        console.log(data)
        res.json(data);
    })
})

http.createServer(app).listen(port,() => {
    console.log(`${port} port에서 서버가 작동 중입니다.`)
})