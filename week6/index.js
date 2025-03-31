const express = require('express');

const jwt = require('jsonwebtoken');

const app = express();

app.use(express.json());

const users = [];
//it will generate a random token
// function generateToken(){
//     let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
//          'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
//          'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E',
//           'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
//            'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0',
//             '1', '2', '3', '4', '5', '6', '7', '8', '9'];

//     let token = "";
//     for (let i = 0; i < 32; i++) {
//         // use a simple function here
//         token += options[Math.floor(Math.random() * options.length)];
//     }
//     return token;
// }

const JWT_SECRET = "USER_APP";

app.post("/signup", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    users.push({
        username,
        password
    })

    res.send({
        message: "You have signed up"
    })

    console.log(users);
})

app.post("/signin", (req, res) => {
    const uname = req.body.username;
    const pass = req.body. password;

    const foundUser = users.find(function(u) {
        if(u.username === uname && u.password === pass){
            return u;
        }else{
            return null;
        }
    })
    if(foundUser){
        const token = jwt.sign({//CONVERT THEIR USERNAME OVER TO JWT
            username : uname
        }, JWT_SECRET);
        // foundUser.token = token;
        res.json({
            token: token
        })
    }else{
        res.status(403).send({
            message : "invalis username or password"
        })
    }
})

app.get("/me", (req, res) => {
    const token = req.headers.authorization;
    const decodedInformation = jwt.verify(token, JWT_SECRET);//this is will get {username : "krishna"}
    const uname = decodedInformation.username;
    const user = users.find(user => user.username === uname);
    if(user){
        res.send({ 
            username : user.username
        })
    }else{
        res.status(401).send({
            message : "unauthorized"
        })
    }
})

app.listen(3000);