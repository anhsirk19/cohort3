//Create a middleware that counts total number of requests sent to a server. Also create an endpoint that exposes it

const express = require("express");
const app = express();

app.use(express.json());

let requests = 0;

app.use((req, res, next) => {
    requests++;
    next();
})

app.get("/", function(req, res){
    res.send(
        "server is running"
    );

})

app.get("/endpoint", function(req, res){
    res.json({
        totalnorequests : requests
    })
})

app.listen(3000);