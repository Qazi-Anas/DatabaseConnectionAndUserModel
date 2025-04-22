const express = require("express")
const userRouter = require("./routes/userRoute")
const morgan = require("morgan")

const app = express()

//some important middleware use to parse json object, data comes from url and static pages
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(`${__dirname}/${'public'}`))

//using morgan middleware
app.use(morgan('dev'))

// middleware for userRoutes
app.use("/api/v1/users", userRouter)

//middleware to handle undefined routes
app.use((req, res, next) => {
    res.status(404).json({
      success: false,
      message: 'Route not found',
      path: req.originalUrl
    });
  });

module.exports = app