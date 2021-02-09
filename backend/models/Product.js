const mongoose = require("mongoose");
const {User} = require('../models/User')
const productSchema = new mongoose.Schema({
    // name: {
    //     type: String,
    //     required: false
    // },
    // email: {
    //     type: String,
    //     required: false
    // },
    // status: {
    //     type: String,
    //     required: true
    // },
    phonenumber: {
        type: Number,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
 
})

const Product = mongoose.model('product', productSchema);

module.exports = {
    Product,
    productSchema
}