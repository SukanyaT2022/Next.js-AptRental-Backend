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

async function findUser(req, res) {
    //come from front end for existing user for log in
    const frontend_username = req.body.username
    const frotend_password = req.body.password

    const user = USER.find({username: frontend_username})

    if(!user){
        res.json({
            "status": falase,
            "message": "User does not exist try to register"
        })
    }

    if(user.password === frotend_password){
        res.json({
            "status": true,
            "message": "Logged in successfully"
        })
    }

}


module.exports = { addUser, fetchUsers, findUser }