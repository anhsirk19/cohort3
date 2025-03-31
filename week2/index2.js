const fs = require('fs');
const path = require('path');


console.log(__dirname);

const filepath = path.join(__dirname, "file.txt");

console.log(filepath);

fs.readFile(filepath, 'utf-8', (err, data) => {
    if(err){
        console.log(errr);
    }else{
        console.log(data);
    }
})