// Testing use this  model its not a part of code , it use in mogoBD.js then test a real code
const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserShema = new Schema({
    name: {type :String},
    age: {type :Number}
})

const User = mongoose.model('User', UserShema);

module.exports =User;