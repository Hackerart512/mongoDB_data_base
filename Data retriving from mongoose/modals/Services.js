const mongoose = require('mongoose');
const {Schema} = mongoose;

const productSchema = new Schema({
    title:{
        type: String,
        required: true
    },

    price: {
        type: String,
        required:true,
    },

    rating: {
        type: String,
        required:true
    },

    date: {
        type: Date,
        default: Date.now,
    }
});

 const Product= mongoose.model('Product', productSchema);
 

module.exports =Product;