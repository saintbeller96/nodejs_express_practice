const express = require('express');
const morgan = require('morgan');
const app = express();

//일반 미들웨어는 파라미터 3개

const logger = (req, res, next) => {
    console.log('I am logger');
    next();//이걸 호출해야 다음 로직을 수행
}

const logger2 = (req, res, next) => {
    console.log('I am logger2');
    next();
}

app.use(logger);
app.use(logger2);
app.use(morgan('dev'));

app.listen(3000, ()=>{
    console.log("Server is running")
})

