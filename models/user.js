const { USER } = require("../schemas/user.js")
//USER come from schemas
function addUser(){
    // const newUser = new User({name: "Yoon",email: "yoon@gmail.com",age: 14});

    // await newUser.save();
}

async function fetchUsers(req, res){
    const users = await USER.find();
    res.json(users)
}

async function findUser() {
    //come from front end for existing user for log in
    const username = req.body.email
    const password = req.body.password

    const response = USER.find({email: username, password: password })

    if(response){
        res.json({
            "status": true,
            "message": "Logged in successfully"
        })
    } else{
        res.json({
            "status": false,
            "message": "Invalid username or password"
        })
    }
}


module.exports = { addUser, fetchUsers }