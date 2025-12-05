const express = require("express")

const app = express()
const PORT = 4000

app.use(express.json())

app.get("/",()=>{
    res.send("Server is running on port 4000")
})

// Get route -send from front end to backend
// req => This always comes from frontend
// res => This is something we send from backend
app.post('/login', (req, res) => {
    const username = req.body.username
    const password = req.body.password

    if(username == "yoon" && password == 12345){
        res.json({
            "status": true,
            "message": "Logged in successfully"
    })
    }else{
        res.json({
            "status": false,
            "message": "Invalid username or password"
    })
    }
})

app.listen(PORT, (req, res)=>{
    console.log("Server is running")
})

// There are four types of api routes GET, POST, UPDATE, DELETE