const express=require('express');
const router=express.Router();
const {getAllProductById,getAllProducts}=require('../controller/productControllers')
//Get product from db
//route GET /api/products
//@access Public
router.get('/', 
    getAllProducts );


router.get('/vendor/:id',getAllProductById);

module.exports=router;