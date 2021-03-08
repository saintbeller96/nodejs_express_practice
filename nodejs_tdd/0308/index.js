const express = require('express');

const app = express();

var user = require('./api/user');

if (process.env.NODE_ENV !== 'test'){
    //테스트 환경에서 사용하지 않을 미들웨어
}

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/users', user);

module.exports = app;