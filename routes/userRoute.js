const express = require("express")
const authController = require("./../controllers/authController")
const userController = require("./../controllers/userController")


const router = express.Router()

router.post("/signup", authController.signupUser)

router.route("/").get(userController.getAllUsers)

module.exports = router