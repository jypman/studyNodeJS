const redis = require('redis')
// 호스팅을 사용하는 경우에는 createClient의 인자에 주소를 넣으면 된다.
const client = redis.createClient();

// 1. create 2. read

// string
// key는 'name'이고 value는 'jyp'이다.
client.set('name', 'jyp');
client.get('name', (err, value) => {
    console.log(value) // 'jyp'
})

// hash
// key는 'friend'고 value는 {name : 'jyp', age : 27}다.
client.hmset('friend', 'name', 'jyp', 'age', 27)
client.hgetall('friend', (err, obj) => {
    console.log(obj) // {name : 'jyp', age : 27}
})

// list
// value의 자료형이 배열이다.
// -1은 배열의 맨 끝의 인덱스를 의미한다.
// key는 'a'고 value는 ['f', 'e', 'b', 'c', 'd']다.
client.rpush('a', 'b', 'c', 'd')
client.lpush('a', 'e', 'f')
client.lrange('a', 0, -1, (err, array) => {
    console.log(array) // ['f', 'e', 'b', 'c', 'd']
})

// set
// value가 배열이며 배열의 요소는 중복을 허용하지 않는다.
// 배열의 요소를 넣는 순서와 관계없이 무작위로 요소가 삽입된다.
// key는 'alphabet'이며 value는 ['c', 'a', 'd', 'b']다.
client.sadd('alphabet', 'a', 'b', 'c', 'd', 'c')
client.smembers('alphabet', (err, array) => {
    console.log(array) // ['c', 'a', 'd', 'b']
})

// sorted set
// value가 배열이며 배열의 요소는 중복을 허용하지 않는다.
// 배열의 요소를 넣은 후 특정 키의 값을 조회 시 오름차순 조회는 zrange, 내림차순 조회는 zrevrange를 사용한다.
// key는 'age'이며 value는 오름차순 -> ['asd', 'fgh', 'jyp'] , 내림차순 -> ['jyp', 'fgh', 'asd']다.
client.zadd('age', 27, 'jyp', 11, 'fgh', 20, 'asd')
client.zrange('age', 0, -1, (err, sortedSet) => {
    console.log(sortedSet) // ['asd', 'fgh', 'jyp']
})
client.zrevrange('age', 0, -1, (err, sortedSet) => {
    console.log(sortedSet) // ['jyp', 'fgh', 'asd']
})

// 3. update
// 키의 이름을 바꾸는 것을 의미한다.
client.rename('alphabet', 'latin')

// 4. delete
// 키를 지우는 것을 의미한다.
client.del('age')

// 5. 기타
// 키가 존재하는지 확인하는 것을 의미한다.
client.exists('age')
