const express = require('express');
// const cors = require('cors')

const jwt = require("jsonwebtoken");

const JWT_SECRET = "krishna";

const app = express();

app.use(express.json());
// app.use(cors());

const users = [];

function logger(req, res, next){
    console.log(req.method + " request came");
    next();
}

app.use(logger);

function auth(req, res, next){
    const token = req.headers.token;
    if(token){
        jwt.verify(token, JWT_SECRET, (err, decoded) => {
            if(err){
                res.status(401).send({
                    message : "Unauthorized"
                })
            }else{
                req.user = decoded;
                next();
            }
        });
    }else{
        res.send({
            message : "signin/ signup for information"
        })
    }
}

//localhost:3000
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
})

app.post("/signup", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username : username,
        password : password
    })

    res.json({
        message : "you are signed in"
    })
})

app.post("/signin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const foundUser = users.find((u) => {
        if(u.username === username && u.password === password){
            return true;
        }else{
            return false;
        }
    })

    if(!foundUser){
        res.json({
            message : "credentials are wrong!"
        })
        return;
    }else{
        const token = jwt.sign({
            username: username
        }, JWT_SECRET);
        res.json({
            token: token
        })
    }
})

app.get("/me", auth, (req, res) => {
    const data = req.user;
    res.json({
        username : data.username
    })
})

app.listen(3000);