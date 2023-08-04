const jwt =require("jsonwebtoken")
const authentication =(req,res,next)=>{
    if(!req.headers.authorization){
        return res.send("pl.login")
    }


const token =req.headers.authorization.split(" ")[1]
jwt.verify(token,'secret',function(err,decoaded){
    if(err){
        res.send("pl login")
    }else{
        req.body.userId=decoaded.userId
        next()
    }
})
}
module.exports={authentication}