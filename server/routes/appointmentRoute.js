import express from 'express';
import { takeAppointment ,getAllAppointment} from '../controllers/appointmentController.js';

const router = express.Router();


// appointment routes
router.post("/get-appointment",takeAppointment);
router.get("/get-all-appointment",getAllAppointment);

export default router;
