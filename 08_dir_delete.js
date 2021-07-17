const fs = require('fs');
const path = require('path');

const removePath = (p, callback) => {
    // p가 파일인지 폴더인지 확인을 한다.
    fs.stat(p, (err, stats) => {
        if (err) return callback(err);
        // p가 파일일 경우 해당 if문을 통해 fs.unlink()로 삭제를 진행한다.
        if (!stats.isDirectory()) {
            console.log('이 경로는 파일입니다.');
            return fs.unlink(p, err =>  err ? callback(err) : callback(null, p));
        }

        console.log('이 경로는 폴더입니다.');

        // p가 폴더일 경우 fs.rmdir()함수를 통해 삭제를 진행한다.
        fs.rmdir(p, (err) => {
            if (err) return callback(err);

            return callback(null, p);    
        });
    });
};

const printResult = (err, result) => {
    if (err) return console.log(err);

    console.log(`${result}를 정상적으로 삭제했습니다.`);
}

const p = path.join(__dirname, 'fghman');

try {
    const files = fs.readdirSync(p);
    if (files.length) files.forEach( f => removePath(path.join(p, f), printResult));
} catch (err) {
    if (err) return console.log(err);
}

removePath(p, printResult);
