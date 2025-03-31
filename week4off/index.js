const express = require('express');

const app = express();

function sum(a){
    let sum = 0;
    for(let i = 1 ; i <= a ;i++){
        sum += i;
    }
    return sum;
}

app.get("/", function(req, res){
    const a = req.query.n;
    const ans = sum(a);
    res.send(ans.toString());
})

app.listen(3000);