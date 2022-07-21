const  mongoose  = require("mongoose");

const userSchema = mongoose.Schema({
    name : String,
    username : String,
    email : String,
    password : String
})

const UserModel = mongoose.model("users", userSchema)

module.exports = UserModel 