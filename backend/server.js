require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
// const foodvendorRoutes=require('./routes/foodvendorRoutes.js');
const productRoutes = require('./routes/productRoutes')
const foodRoutes = require('./routes/foodRoutes')
const Product = require('./models/Product')
const {Food} = require('./models/Food')
const userRoutes=require('./routes/userRoutes')
const Checkout=require('./models/Checkout');
const multer=require('multer');
const path=require('path');

connectDB();


const app = express();

app.use(express.static(__dirname+"../frontend/public/"));
app.use(express.json());

app.use('/api/products', productRoutes);
//the disk storage engine gives full ciontrol on storing  file to disk
// var Storage=multer.diskStorage({
//     destination:"./public/images",
//     filename:(req,file,cb)=>{
//         cb(null,file.imageUrl+"_"+Date.now()+Path.extname(file.extname(file.originalname)))
//     }
// });

// var upload=multer({
//     storage:Storage
// }).single('file'); 

app.post('/sellerprofile',(req,res)=>{
    // console.log(req.file);
    
    console.log("hello")
    const seller=new Product({
        email:req.body.email,
        name:req.body.name,
        status:req.body.status,
        phonenumber:req.body.phonenumber,
        imageUrl:req.body.imageUrl,
        foodItem:[]
    }) 

    seller.save()
    .then(result=>res.json(result))
    .catch(err=>res.json(err));
})
//For saving food by finding vendor of particular id
app.post('/sellItem/:id',(req,res)=>{
    console.log("1234");
    const adddish= new Food({
        name:req.body.name,
        price:req.body.price,
        // // Afterward we will implement MULTER 
        imageUrl:req.body.imageUrl
        
    })

   
    adddish.save().then((food)=>{
        console.log(req.params.id);
        
        Product.updateOne({_id:req.params.id},{ $push: { foodItem:food  } })
        .then(console.log(food))
        .catch(err=> res.json(err));
    }).catch(err=>res.json(err));



})



app.get('/vendor/api/products/:id', async (req, res) => {
    try {
        const products = await Product.findById(req.params.id);
        res.json(products);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
})

app.get('/dishvendor/api/products/:name',async(req,res)=>{
        try{
            console.log(req.params.name);
             const products=await Product.find({"dishes.name":req.params.name});
             res.json(products); 
        }
        catch(error){
            console.error(error);
            res.status(500).json({message:"Server Error"});
    
        }
})

app.get('/dishvendor/api/foods/:name',async(req,res)=>{
    try{
        console.log(req.params.name);
         const products=await Food.find({"name":req.params.name});
         res.json(products); 
    }
    catch(error){
        console.error(error);
        res.status(500).json({message:"Server Error"});

    }
})
//  app.use('/api/foodvendor',foodvendorRoutes);
app.use('/api/foods', foodRoutes);

app.use('/user',userRoutes); 

app.post('/payout',(req,res)=>{
    console.log(req.body);
       const order=new Checkout({
           email:req.body.email,
           zip:req.body.zip,
           Address:req.body.address,
           City:req.body.city,
           state:req.body.state
       })
    
      order.save()  
       .then(user => res.json(user))
       .catch(err => console.log(err));

});  



app.get('/payout',(req,res)=>{
   console.log("HITTED");
});





const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}) 



