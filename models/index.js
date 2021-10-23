// 여러 모델 파일을 하나의 객체로 묶어주는 역할을 한다.
const Sequelize = require('sequelize');
const fs = require('fs')
const path = require('path')
const basename = path.basename(__filename);
const config = require(__dirname + '/../config/mysql.js')[process.env.NODE_ENV];

let sequelize;
let db = {};

if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
    sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// 모델 파일들을 조회
// fs.readdirSync(__dirname)은 해당 경로 내의 파일을 요소로 갖는 배열을 만든다.
fs.readdirSync(__dirname)
    .filter(file => {
        // 해당 경로 내의 파일 중에서 .으로 시작하는 파일, index.js파일, js파일이 아닌 것은 거른다는 것이다.
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
        // sequelize 6버전에서는 let model = sequelize['import'] (path.join(__dirname, file))으로 할 경우 다음과 같은 에러가 뜬다.
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
    if(db[modelName].associate)
        db[modelName].associate(db);
})

//
db.sql = sequelize;
//
db.S = Sequelize;

// 모델 동기화
// 옵션이 { alter: true }의 경우 DB의 테이블의 현재 상태를 확인 후
// 테이블에서 필요한 변경을 수행하여 모델과 일치하도록 한다.
sequelize.sync({ alter: true });

module.exports = db;