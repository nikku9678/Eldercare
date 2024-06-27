import { catchAsyncErrors } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/error.js";
import { Appointment } from "../models/appointmentModel.js";

export const takeAppointment = catchAsyncErrors(async (req, res, next) => {
    console.log("message")
    const { name, email,phone,message} = req.body;
    if (!name || !email | !phone || !message ) {
      return next(new ErrorHandler("Please Fill Full Form!", 400));
    }
  
    const appointment = await Appointment.create({
        name,email,phone,message
    })

    res.status(200).json({
        success: true,
        message: "Message send successfully",
        appointment,
      });

  });
  
export const getAllAppointment = catchAsyncErrors(async (req, res, next) => {
    const appointment = await Appointment.find({})
    
    res.status(200).json({
      success: true,
      appointment,
    });

  });
  