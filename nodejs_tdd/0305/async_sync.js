const fs = require('fs');

//const data = fs.readFileSync('./data.txt', 'utf-8');
const data = fs.readFile('./data.txt', 'utf8', (err, data)=>{
    console.log(data);
})
console.log(`${data}`);
