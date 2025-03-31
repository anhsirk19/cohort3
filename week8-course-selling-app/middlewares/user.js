const jwt = require("jsonwebtoken");
const { JWT_USER_PASSWORD } = require("../config");
function userMiddleware(req, re, next){
    const token = req.headers.token;

    const user = jwt.verify(token, JWT_USER_PASSWORD);

    if(user){
        req.userId = user.id;
        next();
    }else{
        res.status(403).json({
            message: "you are not signed in"
        })
    }
}

module.exports = {
    userMiddleware : userMiddleware
}