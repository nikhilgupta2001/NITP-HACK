require('dotenv').config();
const mongoose=require("mongoose");


const connectDB= async ()=>{
    try{ 
       await mongoose.connect("mongodb+srv://admin-nikhil:1234@cluster0.we2en.mongodb.net/shop?retryWrites=true&w=majority",{
        useNewUrlParser:true,
        useUnifiedTopology:true 
    });
    console.log("MongoDBconnection SUCCESS"); 
}
    catch(error){
        console.error("MongoDB connection FAIL");
        process.exit(1);
    }
}

    module.exports=connectDB;

