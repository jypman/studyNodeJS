const http = require('http');
const port = 3001;

const express = require('express');
let app = express();

const dotenv = require('dotenv');
dotenv.config();

const mysql = require('mysql');
let db = mysql.createConnection({
    host : 'localhost',
    port : 3306,
    user : 'root',
    password : process.env.DATABASE_PASSWORD,
    database : 'boards'
})

db.connect();

const findUserById = id => {
    return new Promise((resolve, reject) => {
        let sql = 'select * from users where id = ?'
        db.query(sql, [id], (err, data) => {
            if(err) reject(err)
            else resolve(data)
        })
    })
}

app.get('/users', (req, res) => {
    let userId = req.query.id
    findUserById(userId)
        .then(result => {
            console.log(result)
            res.json(result)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message : '/users에서 error 발생 ㅠ'})
        })
})

app.get('/boards', async (req, res) => {
    let userId = req.query.id
    try {
        let result = await findUserById(userId)
        console.log(result)
        res.json(result)
    } catch (err){
        console.log(err)
        res.status(500).json({message : '/boards에서 error 발생 ㅠ'})
    }
})

http.createServer(app).listen(port, () => {
    console.log(`${port} port에서 서버가 작동 중입니다 :)`)
})