// 모델들을 가져와서 사용하는 파일이다.
let {users, boards} = require('./models');

console.log(users, boards)

// 데이터 추가
// users.create({
//     name : 'jyp',
//     age : '27'
// })
// .then(result => {
//     console.log(result);
// })