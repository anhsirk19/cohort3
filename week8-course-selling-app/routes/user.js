// const express = require("express");
// const Router = express.Router;

const { Router } = require("express");

const { userModel } = require("../db");

const userRouter = Router();

const jwt = require("jsonwebtoken");

const { JWT_USER_PASSWORD } = require("../config");

userRouter.post("/signup", async (req, res) => {

    const {email, password, firstName, secondName} = req.body;

    await userModel.create({
        email : email,
        password : password,
        firstName : firstName,
        secondName : secondName
    })

    res.json({
        message : "signup endpoint"
    })
})


userRouter.post("/signin", async (req, res) => {

    const {email, password } = req.body;

    const user = await userModel.findOne({
        email: email,
        password : password
    })

    if(user){
        const token = jwt.sign({
            id: user._id
        }, JWT_USER_PASSWORD);

        res.json({
            token: token
        })
    }else{
        res.status(403).json({
            message: "incorrect credentials"
        })
    }
})

userRouter.get("/purchases", (req, res) => {
    res.json({
        message: "purchases endpoint"
    })
})

module.exports = {
    userRouter : userRouter
}