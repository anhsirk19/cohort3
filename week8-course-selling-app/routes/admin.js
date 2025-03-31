const { Router } = require("express");

const { adminModel, courseModel } = require("../db");

const adminRouter = Router();

const jwt = require("jsonwebtoken");

const { JWT_ADMIN_PASSWORD } = require("../config");

const { adminMiddleware } = require("../middlewares/admin");
const course = require("./course");

adminRouter.post("/signup", async (req, res) => {
    const {email, password, firstName, secondName} = req.body;

    await adminModel.create({
        email : email,
        password : password,
        firstName : firstName,
        secondName : secondName
    })

    res.json({
        message : "signup endpoint"
    })
})

adminRouter.post("/signin", async (req, res) => {
    const {email, password } = req.body;

    const admin = await adminModel.findOne({
        email: email,
        password : password
    })

    if(admin){
        const token = jwt.sign({
            id: admin._id
        }, JWT_ADMIN_PASSWORD);

        res.json({
            token: token
        })
    }else{
        res.status(403).json({
            message: "incorrect credentials"
        })
    }
})

adminRouter.post("/course",adminMiddleware, async (req, res) => {

    const {title, description, imageUrl, price} = req.body;

    await courseModel.create({
        title: title,
        description: description,
        imageUrl: imageUrl,
        price: price,
        creatorId: req.adminId
    })
    res.json({
        message: "course created",
        courseId: course._id
    })
})

adminRouter.put("/course", adminMiddleware,async (req, res) => {
    const adminId = req.adminId;

    const { title, description, imageUrl, price, courseId } = req.body;

    const course = await courseModel.updateOne({
        _id: courseId,
        creatorId: adminId
    }, {
        title: title,
        description: description,
        imageUrl: imageUrl,
        price: price
    })
    res.json({
        message: "course updated",
        courseId: course._id
    })
})

adminRouter.get("/course/bulk", async (req, res) => {
    const adminId = req.adminId;

    const courses = await courseModel.find({
        creatorId: adminId
    });
    res.json({
        message: "course updated",
        courses
    })
})

module.exports = {
    adminRouter : adminRouter
}