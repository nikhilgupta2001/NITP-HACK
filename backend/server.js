require('dotenv').config();
const express=require('express');
const connectDB=require('./config/db');
// const foodvendorRoutes=require('./routes/foodvendorRoutes.js');
const productRoutes=require('./routes/productRoutes')
const foodRoutes=require('./routes/foodRoutes')
const Product=require('./models/Product')

connectDB();

const app =express();


 app.use(express.json());   

 app.use('/api/products',productRoutes);
 app.get('/vendor/api/products/:id',async(req,res)=>{
    try{
         
        const products=await Product.findById(req.params.id);
        
        res.json(products); 
   }
   catch(error){
       console.error(error);
       res.status(500).json({message:"Server Error"});

   }
 })
//  app.use('/api/foodvendor',foodvendorRoutes);
 app.use('/api/foods',foodRoutes);
 const PORT=process.env.PORT || 5000;

 app.listen(PORT,()=>{
     console.log(`Server running on port ${PORT}`);
 }) 