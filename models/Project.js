import mongoose from "mongoose";

const project= new mongoose.Schema({
    name:{
        required:true,
        type: String,
    },
    name:{
        required:true,
        type: Number
    },
});

export default mongoose.model('Projects', project)