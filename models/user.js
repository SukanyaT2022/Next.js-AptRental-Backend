const USER = require("../schemas/user.js")

function addUser(){
    const newUser = new User({name: "Yoon",email: "yoon@gmail.com",age: 14});

    await newUser.save();
}

function fetchUser(){}

function deleteUser(){}

function updateUser(){}


