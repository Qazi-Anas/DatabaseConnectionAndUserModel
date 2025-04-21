const User = require("./../models/userModel") 


//Signup user controller
exports.signupUser = async (req, res, next) => {
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
}