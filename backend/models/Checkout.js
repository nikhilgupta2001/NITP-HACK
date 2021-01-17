const mongoose=require("mongoose");




const checkoutSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    zip:{
        type:Number,
        required:true
    },
    Address:{
        type:String,
        required:true
    },
    City:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    }
})

const Checkout=mongoose.model('checkout',checkoutSchema);

module.exports=Checkout;