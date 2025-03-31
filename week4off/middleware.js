const express = require("express");

const app = express();

app.use(express.json());

function ageMiddleware(req, res, next){
    
    
    const n = parseInt(req.params.age);
    console.log(n);
    
    if (isNaN(n)) {
        return res.status(400).send("Invalid age parameter");
    }
    if (n > 14) {
        next();
    } else {
        res.status(403).send("not eligible to ride");
    }
}




app.get("/ride1/:age",ageMiddleware, (req, res) => {
    res.send("you can ride ride 1");
})

app.get("/ride2/:age",ageMiddleware, (req, res) => {
    res.send("you can ride ride 2");
})

app.listen(3000, () => {
    console.log("listening on port 3000");
})