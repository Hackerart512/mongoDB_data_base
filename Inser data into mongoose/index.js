const express = require('express');
const mongoose  = require('mongoose');
const connectToMogoose= require('./db');
const Product = require('./modals/Services');

const app = express();
const port = 5500;

async function start() {
    // Enter value i user schema { collection name is product}
    let user = new Product({
        title:"Watch",
        price: "1200",
        rating:"5",
    });

    // save value in database collection
    user.save().then(async (doc) => {
        if(doc){
            console.log("successs save");
            console.log(doc._id);
        }
    });
}

// Run a async function
start();


app.get('/', function(req, res){
    res.send("Hello");
    console.log("Hello");
})

app.listen(port, function(){
    console.log(`http://localhost:${port}`);
})