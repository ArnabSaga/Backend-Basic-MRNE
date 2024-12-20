import mongoose from "mongoose";

const patientSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        diagonsedWidth: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
        bloodGroup: {
            type: String,
            enum: ["-AB", "-AB", "+A", "-A", "+B", "-B", "+O", "-O"],
            required: true
        },
        gender: {
            type: String,
            enum: ["Male", "Female", "Other"],
            required: true
        },
        admittedIn: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Hospital"
        }
    }, { timeseries: true });

export const Patient = mongoose.model('Patient', patientSchema);