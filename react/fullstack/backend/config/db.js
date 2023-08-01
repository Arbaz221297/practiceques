const mongoose =require("mongoose")

const connection=mongoose.connect("mongodb://127.0.0.1:27017/practice1");
console.log("connected to db")
module.exports={connection}