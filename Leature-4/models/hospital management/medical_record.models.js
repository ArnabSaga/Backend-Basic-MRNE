import mongoose from 'mongoose';

const medicalRecordSchema = new mongoose.Schema({}, {timeseries: true});

export const MedicalRecord = mongoose.model('MedicalRecord',medicalRecordSchema);