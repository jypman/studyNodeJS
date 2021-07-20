// 여러 모델 파일을 하나의 객체로 묶어주는 역할을 한다.
const Sequelize = require('sequelize');
const fs = require('fs')
const path = require('path')
const dotenv = require('dotenv');
dotenv.config();

const dbName = process.env.DATABASE_NAME
const user = process.env.DATABASE_USER
const password = process.env.DATABASE_PASSWORD
const options = {
    host : process.env.DATABASE_HOST,
    dialect : 'mysql',
    // 날짜를 문자열로 파싱하도록 한다.
    dialectOptions: { charset: "utf8mb4", dateStrings: true, typeCast: true },
    // 한국 타임존으로 설정한다.
    timezone: "+09:00",
    // sequelize에서 사용한 쿼리문을 콘솔창에서 볼 수 있도록 하는 옵션이며 false로 보이지 않도록 할 수 있다.
    logging : false
}

let sequelize = new Sequelize(dbName, user, password, options)
let db = {};

// 모델 파일들을 조회
// fs.readdirSync(__dirname)은 해당 경로 내의 파일을 요소로 갖는 배열을 만든다.
fs.readdirSync(__dirname)
    .filter(file => {
        // 해당 경로 내의 파일 중에서 .으로 시작하는 파일과 index.js파일은 거른다는 것이다. 예) .env
        return (file.indexOf('.') !== 0) && (file !== 'index.js')
    })
    .forEach(file => {
        // sequelize 6버전에서는 let model = sequelize['import'] (path.join(__dirname, file))으로 할 경우 다음과 같은 에러가 뜬다.;
        // sequelize.import is not a function
        // 아래의 코드로 수정해준다.
        let model = require(path.join(__dirname, file))(
            sequelize,
            Sequelize.DataTypes
        )
        console.log('모델 : ',model);
        // model.name은 모델들을 읽어 define으로 생성할 때 전달한 첫번째 인자 값이다.
        console.log('model.name은? ', model.name)
        // db[model.name]을 반복하여 여러 모델들을 하나의 객체로 만들어주는 작업을 한다.
        db[model.name] = model;
    })

Object.keys(db).forEach(modelName => {
    // 각 모델파일에서 정의한 모델명.associate = models => {}부분의 관계를 등록하는 부분으로 이해하자!
    if("associate" in db[modelName])
        db[modelName].associate(db);
})

//
db.sql = sequelize;
//
db.S = Sequelize;

// 객체로 생성된 모델과 데이터베이스의 싱크를 맞춘다.
// 모델파일을 통해 데이터베이스의 테이블을 생성할 수 있다.
sequelize.sync();

module.exports = db;