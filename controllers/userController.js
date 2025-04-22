const User = require("./../models/userModel")

exports.getAllUsers = async (req, res, next) => {
    const user = await User.find()
    console.log(user)
    res
    .status(200)
    .json({
        status: "success",
        total: user.length,
        data: {
            users: user
        } 
    })
}