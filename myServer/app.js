// app.js는 미들웨어만 포함하고 서버를 직접 생성하는 코드가 존재하지 않는다.
// 서버를 생성하는 일은 bin/www가 담당한다.

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// views는 템플릿 엔진이 있는 디렉토리의 경로를 알려준다.
app.set('views', path.join(__dirname, 'views'));
// view engine은 어떤 템플릿 엔진을 사용할지 알려주는 부분이다.
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// 아래의 코드는 에러를 처리하는 부분이다.
app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  // res.locals에 대해서 공부가 필요하다!
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
