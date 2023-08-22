const express = require('express');
const mongoose = require('mongoose');
const mogooseURI = 'mongodb://127.0.0.1:27017/doru';
const User = require('./modals/user');

mongoose.connect(mogooseURI,{});

// const User = mongoose.model('User', {
//     name: {type :String},
//     age: {type :Number}
// })

//Create a new document
async function start() {
    let user = new User({
        name:"AAyush",
        age:21,
    });
    user.save().then(async (doc) => {
        if(doc){
            console.log("successs save");
            console.log(doc._id);
        }
    });

    // let user2 = await User.findOne({ name:"piyush", age:21 });
    // user2.name = "Gorav";
    // user2.save().then(async (doc) => {
    //     if(doc){
    //     console.log("Documents has updated succesfully saved");
    //     }
    // })
}
start();