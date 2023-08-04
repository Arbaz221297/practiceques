const express =require("express")
const {connection}=require("./config/db")
const {noteController} =require("./routes/notes.routes")
const {userController} =require("./routes/user.routes")
const {authentication}=require("./middleware/authentication")
const cors = require("cors")
const app =express();
const PORT =8080;
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Home page")
})
app.use(cors())
app.use("/user",userController)
app.use(authentication)
app.use("/notes",noteController)

app.listen(PORT,async()=>{
    try{
        await connection
        console.log(`listening on ${PORT}`)
    }catch(err){
        console.log(err);
    }
})