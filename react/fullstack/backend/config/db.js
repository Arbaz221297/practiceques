const mongoose =require("mongoose")
const connection=mongoose.connect("mongodb+srv://arbazshaikh221297:Arbaz2212@cluster0.4uh24mz.mongodb.net/practice1");

// const connection=mongoose.connect("mongodb://127.0.0.1:27017/practice1");
console.log("connected to db")
module.exports={connection}