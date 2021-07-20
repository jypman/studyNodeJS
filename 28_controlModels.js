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
// users.findAll({})
//     .then(result => {
//         console.log('조회한 데이터 : ', result)
//     })

// 모든 데이터 조회 시 옵션 설정
// {raw : true}의 경우 간결하게 데이터를 조회할 수 있다.
// users.findAll({raw : true})
//     .then(result => {
//         console.log('조회한 데이터 : ', result)
//     })

// {attributes : ['칼럼명1', '칼럼명2']}의 경우 특정 칼럼을 배열의 요소에 담아서 특정 칼럼의 데이터만 조회할 수 있다.
// users.findAll({
//     raw : true,
//     attributes : ['id', 'name']
// })
//     .then(result => {
//         console.log('조회한 데이터 : ', result)
//     })

// {limit : 숫자, offset : 숫자}의 경우 데이터 조회 갯수와 몇 번째 이후의 데이터부터 조회할지 설정할 수 있다.
// users.findAll({
//     raw : true,
//     attributes : ['id', 'name'],
//     limit : 2,
//     offset : 1
// })
//     .then(result => {
//         console.log('조회한 데이터 : ', result)
//     })

// { order : [ ['칼럼', 'DESC' 혹은 'ASC'] ] }의 경우 데이터를 정렬하여 조회할 수 있다.
// users.findAll({
//     raw : true,
//     attributes : ['id', 'age'],
//     order : [
//         ['id', 'ASC']
//     ]
// })
//     .then(result => {
//         console.log('조회한 데이터 : ', result)
//     })

// {where : { 칼럼명 : 데이터 값 } }은 특정 칼럼의 데이터 값을 조회할 수 있다.
// const { Op } = require("sequelize");
// users.findAll({
    // raw : true,
    // where : {
    //     id : 10
    // }

    // id = 9
    // where : {
    //     [Op.and] : {id : 9}
    // }

    // id = 1이 없으면 id = 11조회하며 1과 11 둘 다 있으면 두개 다 조회
    // where : {
    //     [Op.or] : [{id : 1}, {id : 11}]
    // }

    // 9 ~ 11
    // where : {
    //     id : {
    //         // [Op.between] : [9,11]
    //     }
    // }

    // 11 <
    // where : {
    //     id : {
    //         [Op.gt] : 11
    //     }
    // }

    // 12 <=
    // where : {
    //     id : {
    //         [Op.gte] : 12
    //     }
    // }

    // < 10
    // where : {
    //     id : {
    //         [Op.lt] : 10
    //     }
    // }

    // <= 9
    // where : {
    //     id : {
    //         [Op.lte] : 9
    //     }
    // }

    // !== 9
    // where : {
    //     id : {
    //         [Op.ne] : 9
    //     }
    // }

    // === 10
    // where : {
    //     id : {
    //         [Op.eq] : 9
    //     }
    // }

    // !== true or false
    // where : {
    //     'boolean의 값을 갖는 칼럼명' : {
    //         [Op.not] : true
    //     }
    // }

    // 9~11에 포함되지 않는 데이터
    // where : {
    //     id : {
    //         [Op.notBetween] : [9,11]
    //     }
    // }

    // 9와 11
    // where : {
    //     id : {
    //         [Op.in] : [9,11]
    //     }
    // }

    // 9와 11이 아닌 것
    // where : {
    //     id : {
    //         [Op.notIn] : [9,11]
    //     }
    // }

    // h를 포함하는 데이터
    // where : {
    //     name : {
    //         [Op.like] : '%h%'
    //     }
    // }

    // h를 포함하지 않는 데이터
    // where : {
    //     name : {
    //         [Op.notLike] : '%h%'
    //     }
    // }
// })
//     .then(result => {
//         console.log('조회한 데이터 : ', result)
//     })

// join하는 방법
// users.findAll({
//     raw : true,
//     include : [
//         {
//             model : boards
//         }
//     ]
// })
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
// users.findAndCountAll({raw : true})
//     .then(result => {
//         console.log('전체 데이터 갯수 조회 결과 : ', result.count)
//         console.log('전체 데이터 조회 결과 : ', result.rows)
//     })

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