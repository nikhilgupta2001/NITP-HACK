const express=require('express');
const router=express.Router();
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');

const User=require('../models/User');

//route GET /api/products
//@access Public

router.post('/register',(req,res,next)=>{
    const { name, email, password } = req.body.user;
    
    User.find({email})
    .exec()
    .then(user=>{
        if(user.length>=1){  
            errors='Email already exists!';
            return res.status(400).json(errors);
        }
        else{ 
            // console.log("Bella Ciao");
            bcrypt.hash(user.password,10,(err,hash)=>{
                if(err)
                {
                    return res.status(500).json({
                        error:err
                    });
                }
                else{
                    const user=new User({
                        email,
                        password:hash,
                        name,
                    });
                    user
                       .save()
                       .then(result=>{
         
                       message= {
                          msg:  'User Registered Successfully',
                          res:   result
                        }
                       return res.status(400).json(message);
                       })
                       .catch(err =>{
                           console.log(err);
                           res.status(500).json({
                               error:err
                           });
                       });
        };
        });
        }
    })
});

router.post('/login',(req,res,next)=>{
    User.find({email:req.body.email})
    .exec()
    .then(user=>{
        console.log(user);
        if(user.length<1){
         
            errors='user not found';
            return res.status(404).json(errors);
            
        }
        bcrypt.compare(req.body.password,user[0].password,(err,result)=>{
            if(err){
                
                errors='password incorrect';
                return res.status(400).json(errors);
            }
            if(result){
               
                const token=jwt.sign(
                {
                    email:user[0].email,
                    userId:user[0]._id,
                    
                },
                process.env.JWT_KEY
                )
               
                return res.cookie('token',token)
              
                
            }
           /* res.status(401).json({
                message:'Auth failed'
            });*/
            errors='user not found';
            return res.status(404).json(errors);
        });
    })
        // res.status(500).json({
        //     error:err
        // })
    })
                    // me upar changes kar rha hu woh dekh lena

module.exports=router;

       
