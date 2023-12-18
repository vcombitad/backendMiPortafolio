import mongoose from "mongoose";

const project= new mongoose.Schema({

    name:{
        required:true,
        type: String,
    },
    description:{
        required:true,
        type: String,
    },
    img:{
        required:true,
        type: String,
    },
    url:{
        required:true,
        type: String,
    },
    
    technology:{
        required:true,
        type: String,
    },
});

export default mongoose.model('Projects', project)