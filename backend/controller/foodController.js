const Food=require('../models/Food');

const getAllFoods=async(req,res)=>{
    try{
        

         const foods=await Food.find({});
         console.log(foods);
         res.json(foods);
    }
    catch(error){
        console.error(error);
        res.status(500).json({message:"Server Error"});

    }
}

const getAllFoodById=async(req,res)=>{
    try{
         const foods=await Food.findById(req.params.id);
         
         res.json(foods); 
    }
    catch(error){
        console.error(error);
        res.status(500).json({message:"Server Error"});

    }
}

module.exports={
    getAllFoodById,
    getAllFoods
}