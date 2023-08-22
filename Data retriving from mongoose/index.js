const express = require('express');
const mongoose  = require('mongoose');
const connectToMogoose= require('./db');
const Product = require('./modals/Services');

const app = express();
const port = 5500;

async function start() {

    let user = await Product.findOne();

    console.log(user);
}

// Run a async function
start();

app.get('/', function(req, res){
    console.log("Hello");
})

app.listen(port, function(){
    console.log(`http://localhost:${port}`);
})