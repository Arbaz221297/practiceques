const {Router} =require("express")
const {NoteModel} =require ("../model/note.model")

const noteController=Router()
const bcrypt=require ("bcrypt")
const jwt =require("jsonwebtoken")


noteController.get("/",async(req,res)=>{
   const notes=await NoteModel.find({userId:req.body.userId})
   
   res.send(notes)
}) 


noteController.post("/create",async(req,res)=>{
   const {Heading,Note,Tag,userId}=req.body;
   const note=new NoteModel({
      Heading,
      Note,
      Tag,
      userId     
      
   })
   try{
      await note.save();
      res.send("note created")
   }catch(err){
      res.send("err")
   }
   
   
}) 



noteController.delete("/delete/:noteId",async(req,res)=>{
   const {noteId}=req.params
   const deleteNode=await NoteModel.findOneAndDelete({_id:noteId, userId:req.body.userId})
 if(deleteNode){
   res.send("deleted")
 }
   else{
      res.send("cannot delete")
   }
   
}) 


noteController.patch("/edit/:noteId",async(req,res)=>{
   const {noteId}=req.params
   const updateNode=await NoteModel.findOneAndUpdate({_id:noteId, userId:req.body.userId},{...req.body})
 if(updateNode){
   res.send("updated")
 }
   else{
      res.send("cannot delete")
   }
   
}) 


module.exports={ noteController}