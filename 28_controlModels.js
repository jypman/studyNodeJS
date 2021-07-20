// 모델들을 가져와서 사용하는 파일이다.
// ./models과 같이 폴더를 require를 하면 해당 폴더 안에 있는 index.js를 require하는 것과 같다.
let {users, boards} = require('./models');

console.log('사용 가능한 모델들 :',users, boards)

// 데이터 추가
// users.create({
//     name : 'jyp',
//     age : '27'
// })
// .then(result => {
//     console.log(result);
// })

// 조회한 데이터가 없으면 추가
// let name = 'zxc',
//     age = 30
// users.findOrCreate({
//     where : {name : name},
//     defaults : {name : name, age : age}
// }).then( ([user, created]) => {
//     console.log('조회한 데이터 :',user)
//     console.log('데이터 추가 여부 :', created)
// })

// 한 번에 여러 개 데이터 추가
// let data = [
//     {name : 'ab', age : 2},
//     {name : 'cd', age : 4},
// ]
// users.bulkCreate(data)
//     .then(result => {
//         console.log('추가한 데이터: ',result);
//     })

// 모든 데이터 조회
// findAll({})의 경우 모든 데이터를 출력한다.
// findAll({raw : true})의 경우 간결하게 데이터를 조회할 수 있다.
// users.findAll({raw : true})
//     .then(result => {
//         console.log('조회한 데이터 : ', result)
//     })

// 가장 먼저 등장하는 하나의 데이터만 조회
// sequelize 6버전에서는 find()가 findOne()으로 바뀜.
// users.findOne({raw : true})
//     .then(result => {
//         console.log('첫 데이터 조회 결과 : ',result)
//     })

// 아이디 값을 이용하여 데이터 조회
// 해당하는 데이터를 조회하지 못했을 경우 result에는 null이 온다.
// let id = 9
// users.findByPk(id, {raw : true})
//     .then(result => {
//         console.log(`id가 ${id}인 데이터 조회 :`, result)
//     })

// 해당 테이블의 전체 데이터 갯수 및 전체 데이터 조회
users.findAndCountAll({raw : true})
    .then(result => {
        console.log('전체 데이터 갯수 조회 결과 : ', result.count)
        console.log('전체 데이터 조회 결과 : ', result.rows)
    })

// 데이터 수정
// users.update({
//     name : 'bnm',
// },{
//     where : {id : 12}
// }).then(() => {
//     console.log('update is completed')
// })

// 데이터 삭제
// users.destroy({
//     where : {id : 13}
// }).then(() => {
//     console.log('delete is completed')
// })