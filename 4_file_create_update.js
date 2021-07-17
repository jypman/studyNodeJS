const fs = require('fs');
const path = require('path');

// 해당 경로에 파일이 없을 경우 새로 생성하여 해당 파일에 내용 추가
const makeFile = (path, callback) => {
    fs.writeFile(path, 'New file, New content', 'utf8', (err) =>{
        if (err) return callback(err);

        console.log('새로운 파일 생성 및 내용을 추가하였습니다.');
        callback(null);
    });
};

// 해당 경로에 동일한 파일 있을 시 동일한 파일에 내용 업데이트
const appendFile = (path, callback) => {
    fs.appendFile(path, '\n Update file', (err) => {
        if(err) return callback(err);

        console.log('기존 파일 내용을 추가작성하였습니다.');
        callback(null); 
    });
};

// 기타 에러발생 시 호출되는 콜백함수
const printErrIfExist = (err) => {
    if (err) return console.log(err);
};

// path 모듈의 join 함수는 매개변수들을 일관된 구분자인 '/'를 두어 합친 새로운 문자열을 출력
const filePath = path.join(__dirname, 'jypman', 'myLife.txt');

//fs.open 함수는 특정 경로의 파일 또는 폴더의 존재여부를 확인한다.
//fs.open 함수의 두번째인자는 파일 접근권한을 입력할 수 있다.(ws는 write권한이 가능한지 확인한다는 의미한다.)
// fd에 전달되는 객체는 연결된 대상 파일의 정보를 담고 있는 파일 디스크립터 객체다.
// err.code 중 EEXIST는 Error EXIST(오류 : 파일이 이미 존재함)을 의미한다.
fs.open(filePath, 'wx', (err,fd) => {
    if (err && err.code === 'EEXIST') return appendFile(filePath, (err) => printErrIfExist(err));
    if (err) return console.log(err);
    return makeFile(filePath, (err) => printErrIfExist(err));
});