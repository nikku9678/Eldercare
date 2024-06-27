import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const appointmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true, 
  },
  phone: {
    required: true,
    type: Number,
  },
  message: {
    required: true,
    type: String,
  },
 
  createdAt: {
    type: Date,
    default: Date.now,
  },
});


export const Appointment = mongoose.model("Appointment", appointmentSchema);