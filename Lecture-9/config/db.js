import mongoose from "mongoose";

export const dbConnection = mongoose.connect('mongodb://0.0.0.0/lecture-9').then(() => {
    console.log('Connected to MongoDB');
});