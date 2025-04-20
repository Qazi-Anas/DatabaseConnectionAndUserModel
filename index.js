const express = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose")

dotenv.config({
    path: "./.env"
})

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(`${__dirname}/${public}`))

const app = express()

app.listen(process.env.PORT, () => {
    console.log(`App is listen to port ${process.env.PORT}`)
})