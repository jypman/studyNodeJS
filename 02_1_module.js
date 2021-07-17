// 해당 module.exports 변수가 가리키는 함수와 변수에 포함되지 않고 해당모듈 파일에서 발동된 함수를 담을 수 있다.
const HAHAHA = require('./02_2_module.js');

// 해당 module.exports 변수가 가리키는 함수를 사용하고 싶을 때 여기서 또다른 변수를 선언하여 사용할 수 있다.
const myWay = require('./02_2_module.js');

// module.exports 변수가 가리키는 함수에 각각 전달인수를 할당한다.
HAHAHA('jypman');
myWay('fghman');
