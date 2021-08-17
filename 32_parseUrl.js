const url = require('urlencode')
const a = '/api/hot-places?region%3Dseoul&page=1&limit=10'
console.log(url.decode(a))