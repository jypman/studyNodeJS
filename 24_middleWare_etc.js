const express = require('express');
let app = express()

const http = require('http');
const port = 3000

// morgan은 클라이언트의 요청 로그를 확인할 수 있는 미들웨어다.
// 응답코드가 200일 경우 녹색, 404는 녹색, 500은 적색이다.
const logger = require('morgan');

// body-parser
const bodyParser = require('body-parser');

// cookie-parser는 헤더에 포함된 쿠키를 json형태로 파싱하는 미들웨어다.
// 추후에 공부가 필요한 부분이다.
const cookieParser = require('cookie-parser')

// multer는 파일 업로드를 위한 미들웨어다.

// express.static은 정적파일 제공을 위한 미들웨어다.
// express는 css, js, 이미지파일 같은 정적파일을 하나의 디렉터리에서 관리한다.

// passport는 사용자 인증을 위한 미들웨어다.
// passport를 이용하면 페북, 네이버에서 제공하는 인증 시스템을 이용할 수 있으며 직접 인증시스템도 만들 수 있다.

app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended : false}));
// 참고로 body에는 데이터의 제한이 없지만 nodeJS에서는 100kb로 제한되어 있다.
app.use(bodyParser.json())
// 하지만 아래와 같이 옵션을 추가하여 데이터의 제한을 변경할 수 있다.
// 제한 단위는 byte다.
app.use(bodyParser.json({limit : 5000000}))

app.use(cookieParser())

app.get('/', (req, res, next) => {
    res.send('hello express!')
})

app.use((req, res, next) => {
    console.log('statusCode : 404')
    next('404지만 500으로 넘어갓!')
})

app.use((err, req, res, next) => {
    console.log(err)
    res.status(500).send(err)
})

http.createServer(app).listen(port, () => {
    console.log(`서버가 ${port} 포트에서 작동하고 있어여 :)`)
})