const {Router} =require("express")
const {UserModel} =require ("../model/user.model")
const userController=Router()
const bcrypt=require ("bcrypt")
const jwt =require("jsonwebtoken")
userController.post("/signup",(req,res)=>{
    const {email,password,age}=req.body;
    bcrypt.hash(password,5,async function(err,hash){
        if(err){
            res.send("somthing went wrong")
        }

    const user=new UserModel({
        email,
        password:hash,
        age

    })
    await user.save();
    res.json({message:"Signup suceess"})
    })
    
})

userController.post("/login",async(req,res)=>{
    const {email,password}=req.body;
    const user=await  UserModel.findOne({email})
    const hash =user.password
    bcrypt.compare(password,hash,function (err,result){
        if(err){
            res.send("somthing went wrong")
        }
        if(result){
           
            const token=jwt.sign({userId:user._id},"secret")
            res.json({message:"login successful",token})
        }else{
            res.send("invalid credentials ")
        }
        
    })
    // res.send("Login")
}) 

module.exports={ userController}