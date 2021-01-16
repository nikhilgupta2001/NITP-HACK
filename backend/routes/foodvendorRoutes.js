const express=require('express');
const router=express.Router();

const {getAllFoodById,getAllFoods}=require('../controller/foodController');
//Get product from db
//route GET /api/products
//@access Public
router.get('/', 
    getAllFoods );

router.get('/:id',getAllFoodById);

module.exports=router;