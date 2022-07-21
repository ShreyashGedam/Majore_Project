const  mongoose  = require("mongoose");

const taskSchema = mongoose.Schema({
    title : {type : String , require : true},
    status : { type : Boolean , default : false},
    userId : {type : String , require : true}
})

const TaskModel = mongoose.model("task", taskSchema)

module.exports = TaskModel