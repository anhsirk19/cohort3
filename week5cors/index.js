const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

//it will host the index.html in same port, so it will not require cors
// app.get("/", (req, res) => {
//     res.sendFile(__dirname +  "./public/index.html");
// })

app.post("/sum", function (req, res){
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.json({
        sum : a+b
    })

    
})

app.listen(3000);