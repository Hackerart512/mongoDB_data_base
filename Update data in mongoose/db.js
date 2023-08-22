// only connnect orr not declared
const express = require('express');

const mongoose = require('mongoose');

const databaseName = 'pandu';

// monoose url
//pandu is a database name if there are exit then not create otherwise create
const mogooseURI = `mongodb://127.0.0.1:27017/${databaseName}`;

mongoose.connect(mogooseURI,{});

var conn = mongoose.connection;
conn.on('connected', function(){
    console.log('Connect to mongoose successfully...');
})



// async function connectToMogoose(){
//     await mongoose.connect(mogooseURI).then(()=>{
//         console.log('Connect to mongoose successfully...');
//     });
// }
// connectToMogoose().catch(err=>{console.log(err)});

module.exports = conn;

