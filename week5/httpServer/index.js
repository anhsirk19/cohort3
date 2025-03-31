const express = require("express");

const app = express();

app.use(express.json());

app.get("/multiply", (req, res) => {
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        "multiply" : a*b
    })
})

app.get("/sum/:a/:b", (req, res) => {
    const a =  parseInt(req.params.a);
    const b =  parseInt(req.params.b);
    res.json({
        "sum" : a+b
    })
})

app.get("/divide", (req, res) => {
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        "divide" : a/b
    })
})
app.get("/suntract", (req, res) => {
    const a =  parseInt(req.query.a);
    const b =  parseInt(req.query.b);
    res.json({
        "subtract" : a-b
    })
})

app.listen(3000, () => {
    console.log("server running on port 3000");
});