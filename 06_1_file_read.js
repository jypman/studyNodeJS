const fs = require('fs');

fs.readFile('./jypman/myLife.txt', (err, data) => {
    if (err) return console.log(err);

    console.log('myLife.txt 파일 읽기 성공');
    console.log(data);
    console.log(data.toString());
});