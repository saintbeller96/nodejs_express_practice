const express = require('express');
const app = express();

//일반 미들웨어는 파라미터 3개
const commonmw = (req, res, next) => {
    console.log('I am commonmw');
    next(new Error('error occured'));
}

//에러 미들웨어는 파라미터 4개
const errormw = (err, req, res, next) => {
    console.log(err.message);

    //에러를 처리하거나
    /*처리*/
    next();

    //그대로 넘겨줌
    //next(err)
}

app.use(commonmw);
app.use(errormw);

app.listen(3000, ()=>{
    console.log("Server is running")
})
