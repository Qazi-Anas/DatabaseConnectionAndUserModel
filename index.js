const express = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose")

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
    app.listen(process.env.PORT, () => {
        console.log(`App is listen to port ${process.env.PORT}`)
    })
}).catch( (error) => {
    console.log("Failed to connect to database !! Shutting Down")
    process.exit(1)
})

