const express = require('express');
const mongoose = require('mongoose');
const connectToMogoose = require('./db');
const Product = require('./modals/Services');

const app = express();
const port = 5500;

async function start() {
    let user2 = await Product.findOne({ title: "Watch" });
    user2.title = "Gorav";
    user2.save().then(async (doc) => {
        if (doc) {
            console.log("Documents has updated succesfully saved");
        }
    })
}

// Run a async function
start();


app.listen(port, function () {
    console.log(`http://localhost:${port}`);
})