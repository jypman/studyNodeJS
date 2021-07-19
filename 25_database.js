const mySql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();

let db = mySql.createConnection({
    host : '127.0.0.1',
    port : '3306',
    user : 'root',
    password : process.env.DATABASE_PASSWORD,
    database : 'boards'
});

db.connect();

// 해당 파일을 실행시키면 아래와 같은 에러가 발생할 수 있다.
// Error: ER_NOT_SUPPORTED_AUTH_MODE
// 이런 경우 터미널에서 mysql에 접속 후 다음과 같이 입력하면 해결 가능하다.
// ALTER USER 'user명'@'host명' IDENTIFIED WITH mysql_native_password BY '비번입력';
db.query('select * from users', (err, data) => {
    if(err) console.log('err 발생 : ', err)
    else{
        console.log(data);
        data.map(item => {
            console.log('유저 아이디 :', item.id, '\n유저 이름 :', item.name, '\n유저 나이:', item.age, '\n------');
        })
    }
})

// 해당 코드를 작성하지 않으면 데이터 베이스 서버에 계속 대기하게 된다.
db.end();