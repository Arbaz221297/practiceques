const express =require("express")
const {connection}=require("./config/db")


const app =express();

app.use(express.json());

app.listen(8000,async()=>{
    try{
        await connection
        console.log(`listening on 8000`)
    }catch(err){
        console.log(err);
    }
})