const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    "development": {
        "username": process.env.DATABASE_USER,
        "password": process.env.DATABASE_PASSWORD,
        "database": process.env.DEV_DATABASE_NAME,
        "host": "127.0.0.1",
        "dialect": "mysql",
        // DB 기타 설정
        "dialectOptions" : {
            // DB 테이블에 데이터를 넣을 때 이모티콘을 인식할 수 있도록 한다.
            charset: "utf8mb4",
            // 날짜를 문자열로 파싱하도록 한다.
            dateStrings: true,
            // 타임존을 역으로 계산하지 않는다.
            typeCast: true
        },
        // 한국 타임존으로 설정한다.
        "timezone" : "+09:00",
        // sequelize에서 사용한 쿼리문을 콘솔창에서 볼 수 있도록 하는 옵션이며 false는 보지 않는다는 의미
        "logging" : false
    },
    "test": {
        "username": process.env.DATABASE_USER,
        "password": process.env.DATABASE_PASSWORD,
        "database": process.env.TEST_DATABASE_NAME,
        "host": "127.0.0.1",
        "dialect": "mysql",
        "dialectOptions" : {
            charset: "utf8mb4",
            dateStrings: true,
            typeCast: true
        },
        "timezone" : "+09:00",
        "logging" : false
    },
    "production": {
        "username": process.env.DATABASE_USER,
        "password": process.env.DATABASE_PASSWORD,
        "database": process.env.PROD_DATABASE_NAME,
        "host": "127.0.0.1",
        "dialect": "mysql",
        "dialectOptions" : {
            charset: "utf8mb4",
            dateStrings: true,
            typeCast: true
        },
        "timezone" : "+09:00",
        "logging" : false
    }
};
