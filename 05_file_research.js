const fs = require('fs');
const path = require('path');

const fileName = 'myLife.txt';
const dirPath = path.join(__dirname, 'jypman');
const filePath = path.join(dirPath, fileName);

// path모듈의 parse함수를 통해 특정 경로의 파일정보(파일의 절대경로와 같은 단순정보)를 확인할 수 있다.
console.log(path.parse(filePath));

const isFileInPath = (path, fileName, callback) => {
    // fs.readdir는 특정 경로 내 파일 또는 폴더 여부를 확인하는 함수를 의미
    // fs.readdir는 특정 경로 안에 있는 모든 파일명을 콜백함수의 매개변수인 'files'에 전달
    // 이때 첫번째 매개변수는 반드시 폴더경로를 가리켜야 한다.
    fs.readdir(path, (err, files) =>{
        if (err) return callback(err);

        let isHere = false;
        files.forEach(f => {
            if (f === fileName) isHere = true;
        });
        // 에러가 발생하거나 해당 경로에 찾고자 하는 파일이 존재하지 않을 때 밠생
        return callback(null, isHere);
    });
};

isFileInPath(dirPath, fileName, (err,isTrue) => {
    if (err || !isTrue) return console.log('파일을 읽을 수 없습니다.');

    // stat함수의 콜백함수의 매개변수인 fileInfo에는 해당 파일의 정보가 담아져 있다.
    fs.stat(filePath, (err,fileInfo) => {
        if (err) return console.log(err);

        return console.log(fileInfo);
    });
});