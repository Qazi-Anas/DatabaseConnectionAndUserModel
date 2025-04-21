const dotenv = require("dotenv")
const mongoose = require("mongoose")
const app = require("./app")

dotenv.config({
    path: "./.env"
})


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
