import mongoose from 'mongoose';
import patientSchema from '../models/patient.js';

patientSchema.statics = {
  get: function (query, cb) {
    this.find(query, cb);
  },
  create: function (data, cb) {
    const patient = new this(data);
    patient.save(cb);
  },
  update: function (query, updateData, cb) {
    this.findOneAndUpdate(query, { $set: updateData }, cb);
  },
  delete: function (query, cb) {
    this.findOneAndDelete(query, cb);
  },
};

const patientModel = mongoose.model('Patient', patientSchema, 'patient');

export default patientModel;
