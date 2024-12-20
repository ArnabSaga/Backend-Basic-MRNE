import mongoose from "mongoose";

const hospitalHoursSchema = new mongoose.Schema({
    hospitalHour: {
        type: Number,
        required: true
    },
    whichHospitals: {
        type: String,
        required: true
    }
});

const doctorSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        salary: {
            type: String,
            required: true
        },
        qualification: {
            type: String,
            required: true
        },
        experienceInYear: {
            type: Number,
            default: 0
        },
        worksInHospitals: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Hospital'
            },
            {
                type:[hospitalHoursSchema]
            }
        ]
    }, { timeseries: true });

export const Doctor = mongoose.model('Doctor', doctorSchema);