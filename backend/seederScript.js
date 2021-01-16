require('dotenv').config();

const productData=require('./data/products');
const foodData=require('./data/foods');
const connectDB=require('./config/db');
const Product=require('./models/Product');
const Food = require('./models/Food');

connectDB();


const importData=async () =>{
 

    try{
      // console.log("HII "+productData);
      await Product.deleteMany({});
      await Product.insertMany(productData);
       await Food.deleteMany({});
       await Food.insertMany(foodData);
       console.log("Data Import Success");
       process.exit();
    }
    catch(error){
   console.error("Error with data import");
   process.exit(1);

    }       

};


importData();
 
