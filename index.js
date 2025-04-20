const express = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const User = require("./models/userModel")

dotenv.config({
    path: "./.env"
})

const app = express()

//some important middleware use to parse json object, data comes from url and static pages
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(`${__dirname}/${'public'}`))


//mongoose database connection

const connectToDatabase = mongoose.connect(`${process.env.DATABASE_CONNECTION_STRING}/${process.env.DATABASE_NAME}`).then( () => {
    console.log("Connect to database successfully!")
}).catch( (error) => {
    console.log("Failed to connect to database !! Shutting Down")
    process.exit(1)
})

app.post("/api/v1/users/signup", async (req, res, next) => {
    const newUser = await User.create({
        name: req.body.name,
        email: req.body.email,
        role: req.body.role,
        password: req.body.password,
        passwordConfirm: req.body.passwordConfirm 
    })

    res
    .status(201)
    .json({
        status: 'success',
        data: {
            user: newUser
        }
    })
})

app.listen(process.env.PORT, () => {
    console.log(`App is listen to port ${process.env.PORT}`)
})