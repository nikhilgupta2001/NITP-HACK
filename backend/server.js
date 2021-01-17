require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
// const foodvendorRoutes=require('./routes/foodvendorRoutes.js');
const productRoutes = require('./routes/productRoutes')
const foodRoutes = require('./routes/foodRoutes')
const Product = require('./models/Product')
const Food = require('./models/Food')
const userRoutes=require('./routes/userRoutes')
const Checkout=require('./models/Checkout');
connectDB();

const app = express();


app.use(express.json());

app.use('/api/products', productRoutes);

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
       const order=new Checkout({
           email:req.body.email,
           zip:req.body.zip,
           Address:req.body.Address,
           City:req.body.City,
           state:req.body.state
       })
    
      order.save()  
       .then(user => res.json(user))
       .catch(err => console.log(err));

}); 

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}) 