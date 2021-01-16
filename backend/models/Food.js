const mongoose=require("mongoose");

const Schema=mongoose.Schema;


const foodSchema=new mongoose.Schema({
    product:{
        type:Schema.Types.ObjectId,
        ref:'product'
    },
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    imageUrl:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:false
    }
})

const Food=mongoose.model('food',foodSchema);

module.exports=Food;