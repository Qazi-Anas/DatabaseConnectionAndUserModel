const mongoose = require("mongoose")
const validator = require("validator")
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        Lowercase: true,
        validate: [validator.isEmail, "please provide a valid email"]
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    passwordConfirm: {
        type: String,
        required: [true, 'Confirm password is required'],
        validate : {
            validator: function(val){
                return val === this.password
            },
            message: "password and passwordConfirm are not same"
        }
    }
}, {timestamps: true})

//write document middleware to encrypt password before save
userSchema.pre("save", async function(next){
    if(!this.isModified("password")) return next()

    this.password = await bcrypt.hash(this.password, 10)
    this.passwordConfirm = undefined

    next()
})

const User = mongoose.model("User", userSchema)

module.exports = User


