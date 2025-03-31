const express = require("express");

const app = express();

const jwt = require("jsonwebtoken");

const { auth, JWT_SECRET } = require("./auth");

const mongoose = require("mongoose");

const bcrypt = require("bcrypt");
mongoose.connect("mongodb+srv://krishna:krishna@cluster0.cjxsr.mongodb.net/todo-app-database");

const {UserModel, TodoModel} = require("./db");

const { z } = require("zod");

app.use(express.json());


app.post("/signup", async (req, res) => {
    try{

        const requiredBody = z.object({
            email: z.string().min(3).max(100).email(),
            name: z.string().min(3).max(100),
            password: z.string().min(3).max(30)
        })

        const parsedDataWithSuccess = requiredBody.safeParse(req.body);

        if(!parsedDataWithSuccess.success){
            res.json({
                message : "incorrect format",
                error : parsedDataWithSuccess.error

            })
            return
        }

        const email = req.body.email;
        const password = req.body.password;
        const name = req.body.name;

        const hashedPassword = await bcrypt.hash(password, 5);

        await UserModel.create({
            email: email,
            password: hashedPassword,
            name: name
        })

        res.json({
            message : "you are signed up!"
        })
    }catch(e){
        res.status(500).json({
            message : " error ehile signingup!"
        })
    }
});

app.post("/signin", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const response = await UserModel.findOne({
        email : email,
    })

    if(!response){
        res.status(403).json({
            message : "you need to signup!"
        })
        return;
    }
    const decryptPasswrord = await bcrypt.compare(password, response.password);

    console.log(response);

    if(decryptPasswrord){
        const token = jwt.sign({
            id: response._id.toString()
        }, JWT_SECRET)

        res.json({
            token
        })
    }else{
        res.status(403).json({
            message : "incorret creds"
        })
    }
});



app.post("/todo", auth, async function(req, res) {
    const userId = req.userId;
    const title = req.body.title;
    const done = req.body.done;

    await TodoModel.create({
        userId,
        title,
        done
    });

    res.json({
        message: "Todo created"
    })
});


app.get("/todos", auth, async function(req, res) {
    const userId = req.userId;

    const todos = await TodoModel.find({
        userId
    });

    res.json({
        todos
    })
});

app.listen(3000, () => {
    console.log("listening on port 3000");
});


