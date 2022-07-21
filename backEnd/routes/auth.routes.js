const {Router} = require("express")
const UserModel = require("../models/user")

 
const authRouter = Router()

authRouter.post("/signup", async(req,res) => {
    console.log(req.body)
    const user = await new UserModel(req.body)
    user.save( ( err , success) => {
        if(err){
            res.status(500).send({message : "Error occured"})
        }
        return res.status(201).send({message : "Sign up success" , token : 54321})
    })
})
      
authRouter.post("/login", async(req,res) => {
    console.log(req.body)
    const checkUser = await UserModel.find(req.body).lean()
    if(checkUser.length>=1)
    {
        var {name,_id} = checkUser[0]
        var payload = {
            _id,
            name,
            token : 54321
        }
        res.send(payload) 
    }  
    res.send({message : "Wrong Credentials"})
})
               
module.exports = authRouter