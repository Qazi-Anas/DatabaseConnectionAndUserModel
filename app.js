const express = require("express")
const userRouter = require("./routes/userRoute")

const app = express()

//some important middleware use to parse json object, data comes from url and static pages
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(`${__dirname}/${'public'}`))

app.use("/api/v1/users", userRouter)

module.exports = app