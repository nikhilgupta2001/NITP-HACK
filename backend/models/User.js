const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const {productSchema}=require('../models/Product');
const { foodSchema } = require("./Food");
const UserSchema=new Schema({
    name:{
        type:String,
        required:true
    },
       email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    product: {
        type: {productSchema}
        ,
        default:{}
    },
    foodItem: {
        type: [foodSchema]
        ,
        default: []
    }
    
})

module.exports=User=mongoose.model('users',UserSchema);