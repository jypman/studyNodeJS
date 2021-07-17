// fs 모듈에서는 파일을 삭제하는 것과 폴더를 삭제하는 방법은 서로 다르다.
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'fghman', 'myLife2.txt');

// fs.access()함수를 통해 파일에 접근할 수 있는지 확인한다.
// fs.access()함수의 두번째 인자 중 fs.constants는 파일 시스템과 관련된 상수들을 그룹으로 모아놓은 상수이다.
// 그 중에서 F_OK는 파일 존재여부를 확인할 수 있는 상수다.
// 해당 파일이 fs.constants.F_OK라는 값을 충족할 수 없을 경우 에러를 반환한다.
fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) return console.log('파일을 삭제할 수 없습니다.')

    // fs.unlink()함수는 특정 경로의 파일을 삭제하는 것을 의미한다.
    fs.unlink(filePath, (err) =>
    err ? console.log(err) : console.log(`${filePath}를 정상적으로 삭제했습니다.`));
});