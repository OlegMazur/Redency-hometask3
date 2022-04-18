import mongoose from "mongoose";
const Task=new mongoose.Schema({
     name:{type:String,required:true},
    created:{type:String,required:true},
    category:{type:String,required:true},
    content:{type:String,required:true},
    editDate:{type:String,required:false},
    category:{type:String,required:true},
    active:{type:Boolean,required:true},
    editStatus:{type:Boolean,required:true},
    })
export default mongoose.model('Task',Task)