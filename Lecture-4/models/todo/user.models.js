import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        /* One method of data model structure
            username: String,
            email: String,
            isActive: Boolean
        */

        //  Best method or industrial method
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        passwore: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

export const User = mongoose.model('User', userSchema);
