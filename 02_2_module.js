console.log('HELLO');
console.log("I'M JYP!");

const greeting = function() {
    console.log('안녕하세요');
};
greeting()

const greet = function(name) {
    console.log('How Are you?' + name);
};

const student = function(name2) {
    console.log('nice to meet you ' + name2)
};

const people = function(name3) {
    console.log('hello ' + name3)
};

// module.exports의 값은 복수로 입력한 다음 세미콜론으로 구분짓는다한들 가장 첫 번쩨 값만 인식한다.
// module.exports를 여러개 만들면 가장 최근의 module.exports를 인식하게 된다.
module.exports = greet;
module.exports = people;
module.exports = student;people;