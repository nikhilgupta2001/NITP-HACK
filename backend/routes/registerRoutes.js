const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { Product } = require('../models/Product');
const {Food}=require('../models/Food')
//Get product from db
//route GET /api/products
//@access Public
// router.get('/', 
//      );


router.post('/sellerprofile/:id', (req, res) => {

    const vendor = new Product({
        phonenumber: req.body.phonenumber,
        status: req.body.status,
        imageUrl: req.body.imageUrl

    })
    // console.log(req.params.id);
    console.log(req.body);

    User.updateOne({ _id: req.params.id }, { $set: { product: vendor } })
        .then(res.json("Updated"))
        .catch(err => res.json(err));
})
router.post('/sellItem/:id', (req, res) => {
    const food = new Food({
        name: req.body.name,
        price: req.body.price,
        // // Afterward we will implement MULTER 
        imageUrl: req.body.imageUrl
    });
    User.updateOne({ _id: req.params.id }, { $push: { foodItem: food } })
        .then(console.log())
        .catch(err => res.json(err));
})
module.exports = router;
