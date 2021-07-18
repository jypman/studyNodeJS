// 라우터를 설정한 파일을 정의한다.
// 여기서 설정된 파일을 app.js가 호출하여 미들웨어를 동록하게끔 한다.
// index.js와 user.js는 엔드포인트가 제외되어 있는데 이것은 개발자가 원하는 형태의 라우터를 만들면 된다.

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render()에 대해서 공부하자!
  res.render('index', { title: 'Express' });
});

module.exports = router;
