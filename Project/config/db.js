import mongoose from "mongoose";

function connectToDB(){
    mongoose.connect(process.env.MONGODB_URI)
    .then(()=>{
        console.log("MongoDB Connected!");
    })
    .catch((err)=>{
        console.error("MongoDB connection error:", err);
    })
}

export default connectToDB;