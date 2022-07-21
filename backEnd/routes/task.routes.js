const {Router} = require("express")
const TaskModel = require("../models/task")
const taskRouter = Router()

taskRouter.get("/:userId/tasks" , async(req,res) => {
    const userId = req.params.userId
    const tasks = await  TaskModel.find({userId})
    res.send(tasks)
})

taskRouter.post("/:userId/tasks" , async (req,res) => {
    // console.log(req.params) 
    const userId = req.params.userId
    var payload = {
        ...req.body,
        userId
    }       
    const task = await  new TaskModel(payload)
    task.save( (err,success) => {
        if(err){
            return res.status(500).send({meassage : "Something went wrong"})
        }
        const taskId =  success._id
        return res.status(201).send(success)  
    })
}) 

taskRouter.delete("/:userId/tasks/:taskId" , async (req,res) => {
    // console.log(req.params) 
    const userId = req.params.userId
    var payload = {
        ...req.body,
        userId
    }     
    const task = await  new TaskModel(payload)
    task.save( (err,success) => {
        if(err){
            return res.status(500).send({meassage : "Something went wrong"})
        }
        const taskId =  success._id
        return res.status(201).send(success)  
    })
}) 
 
module.exports = taskRouter