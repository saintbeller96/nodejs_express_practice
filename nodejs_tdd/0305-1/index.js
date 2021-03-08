const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {

    if (req.url ==='/'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello World\n');
    }
    else if( req.url === '/users'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('User list\n');
    }
    else{
        res.statusCode = 404;
        res.end('Not Found\n');
    }
})

//서버를 요청 대기 상태로 만듬
server.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
})