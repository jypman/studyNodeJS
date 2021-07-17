const fs = require('fs');

const checkDir = (path, callback) => {

    // stat함수에서 error가 발생하면 err 변수에 Error객체 전달
    // stat함수의 콜백함수의 매개변수인 stats에 해당파일의 정보가 전달된다.
    fs.stat(path, (err, stats) => {
        // 해당경로에 폴더가 존재하지 않아 에러 발생
        // ENOENT는 Error NO Entry(오류 : 항목 없음)를 의미한다.
        if (err && err.code === 'ENOENT') return callback(null, true);
        // 해당경로에 해당 폴더가 존재하는지 찾는 과정에 기타 에러가 발생
        // 콜백함수에 두번째 인자를 주지 않았기에 콜백함수의 두번쨰 인자를 포함한 로직은 실행되지 않는다.
        if (err) return callback(err);
        // 해당 경로에 폴더가 있으면 아래 로직을 리턴하며 stats.isDirectory()는 true를 출력하기 때문에 !를 붙여주어
        // return callback()을 발동시키게끔 한다.
        return callback(null, !stats.isDirectory())
    });
};

// __dirname는 현재 이 파일을 담고 있는 폴더 경로를 알려주는 Node.js코드이다.
const currentPath = __dirname;
// 경로와 폴더명을 / 구분자로 구분 짓는다.
// 변수는 문자열이 아니기 때문에 템플릿 리터럴을 이용해서 문자열로 바꿔준다.
let path = `${currentPath}/jypman`;

checkDir(path, (err, isTrue) => {
    if (err) return console.log(err);
    if (!isTrue) {
        console.log('이미 동일한 폴더가 있습니다. 폴더명을 변경하십시오.');
        path = `${currentPath}/fghman`;
    };
    // 해당 경로에 해당폴더가 존재하지 않는다면 해당 폴더를 생성하고 콜백함수가 실행된다는 의미이다.
    // 만약 존재하지 않거나 과정에서 에러가 발생하면 err 변수에 Error객체가 전달되고 콜백함수가 실행된다.  
    fs.mkdir(path,(err) => {
        if (err) console.log(err);
        console.log(`${path} 폴더 생성 완료`)
    });
});