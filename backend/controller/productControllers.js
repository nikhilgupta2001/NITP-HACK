const Product=require('../models/Product');

const getAllProducts=async(req,res)=>{
    try{
         const products=await Product.find({});
         res.json(products);
    }
    catch(error){
        console.error(error);
        res.status(500).json({message:"Server Error"});
    }
}


const getAllProductById=async(req,res)=>{
    try{
         
         const products=await Product.findById(req.params.id);
         
         res.json(products); 
    }
    catch(error){
        console.error(error);
        res.status(500).json({message:"Server Error"});

    }
}

//Api for getting vendore corr to dish name 

const getAllProductByName=async(req,res)=>{
    try{
         const products=await Product.find({name:req.params.name});
         
         res.json(products); 
    }
    catch(error){
        console.error(error);
        res.status(500).json({message:"Server Error"});

    }
}


module.exports={
    getAllProductById,
    getAllProducts
}