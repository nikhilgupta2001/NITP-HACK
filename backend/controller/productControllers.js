const Product=require('../models/Product');
const Us=require('../models/Product');
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
         
        await Product.findById(req.params.id)
         .populate('users',['_id','name'])
         .then(product=>{
            res.json(products); 
         })
         .catch(err=>res.status(404).json(err));
         
    }
    catch(error){
        console.error(error);
        res.status(500).json({message:"Server Error"});

    }
}

//Api for getting vendore corr to dish name 




module.exports={
    getAllProductById,
    getAllProducts
}