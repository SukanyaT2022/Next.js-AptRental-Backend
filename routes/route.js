const express = require("express")
const router = express.Router()
const { fetchUsers } = require("../models/user.js")  //Named import

// Get route -send from front end to backenddddd
// req => This always comes from frontend
// res => This is something we send from backend
// There are four types of api routes GET, POST, UPDATE, DELETE

router.get("/", (req, res)=>{
    res.send("Server is running on port 4000")
})

router.get('/users', (req, res) => {
    fetchUsers(req, res)
})

router.post('/login', (req, res) => {
    const response = findUser(req, res)
})

module.exports = router