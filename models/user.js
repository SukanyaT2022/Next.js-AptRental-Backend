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
    const frontend_username = req.body.username.trim()
    const frontend_password = req.body.password.trim()

    const user = await USER.findOne({username: frontend_username})

    if(!user){
        return res.json({
            "status": false,
            "message": "User does not exist try to register"
        })
    }

    console.log('User password:', user.password)

    if(user.password === frontend_password){
        return res.json({
            "status": true,
            "message": "Logged in successfully"
        })
    }

    return res.json({
        "status": false,
        "message": "Invalid username or password!"
    })
}


module.exports = { addUser, fetchUsers, findUser }