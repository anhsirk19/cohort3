const express = require('express');

const app = express();

const users = [];

app.use(express.json());

app.post("/signup", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username,
        password
    })

    res.json({
        message : "you are signed up, now sign in!"
    })
})

app.post("/signin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const response = users.find((u) => u.username === username && u.password === password);
    if(!response){
        return res.json({
            message : "invalid credentials"
        })
    }
    const token = jwt.sign({
        username: username
    }, JWT_SECRET);
    res.json({
        token: token
    })
})

app.get("/todos", auth, (req, res) => {
    
})