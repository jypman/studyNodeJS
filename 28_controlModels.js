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