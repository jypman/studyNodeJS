const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'jypman', 'myLife.txt');

// fs.open함수의 두번째 인자 값에서 r은 파일의 읽기 권한이 가능한지 묻는 것을 의미한다.
// 해당 파일이 존재하지 않으면 에러를 반환한다.
fs.open(filePath, 'r', (err,fd) => {
    if (err && err.code === 'ENOENT') return console.log('찾고자 하는 파일이 없습니다.')
    if (err) return console.log(err);

    console.log('정상적으로 파일을 읽기가 가능합니다.');

    // 첫번째 매개변수 : 파일경로, 두번째 : 인코딩명, 결과 값은 콜백함수의 data라는 매개변수에 전달된다.
    // readFile()함수는 비동기 함수이며 비동기 함수를 이용하여 파일을 읽어보자!
    fs.readFile(filePath, 'utf-8', (err,data) => {
        if (err) return console.log(err);

        console.log(data);
    });

    try {
        // readFile()과는 상반되어 readFileSync()함수는 동기 함수이며 동기 함수를 이용하여 파일을 읽어보자!
        // 동기함수에 대해 예외처리를 할 경우 tryCatch문을 이용해야 한다.
        // 하지만 비동기 함수는 tryCatch문을 사용해도 의미가 없기 때문에 콜백함수의 err 매개변수를 잘 활용해야 한다.
        const data = fs.readFileSync(filePath, 'utf-8');
        console.log(data);
    } catch (error) {
        console.log(error);
    }
});