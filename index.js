const express = require("express")
const cors = require('cors')
const app = express()
const PORT = 4000
const connectDB =  require("./config/database")
const routes = require("./route/route")

// connection to mongo db
require('dotenv').config()
connectDB()

app.use(express.json())
app.use(cors())
app.use("/", routes)

app.listen(PORT, (req, res)=>{
    console.log("Server is running")
})