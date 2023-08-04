const mongoose =require("mongoose")

const noteSchema=mongoose.Schema({
    Heading: {type:String},
    Note : {type:String},
    Tag : {type:String},
    userId:{type:String}
})

const NoteModel =mongoose.model("note",noteSchema)

module.exports={
    NoteModel
}