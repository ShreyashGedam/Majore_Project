const express = require("express")
const connection = require("./db")
const cors = require("cors")

const authRouter = require("./routes/auth.routes")
const taskRouter = require('./routes/task.routes')

const app = express()

app.use(cors())
app.use(express.json())
app.use("/auth",authRouter)
app.use('/user',taskRouter)
 
app.listen(8080 , async() => {
    try{ 
        await connection
        console.log("Connected to db success")
    }
    catch{ 
        console.log("Something wrong connecting")
    }

    console.log("Serrver is listening localhost : 8080")
})