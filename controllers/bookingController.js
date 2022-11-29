const asyncHandler = require('express-async-handler')
const Booking_History = require('../models/booking_history')

const createBookingHistory = asyncHandler( async(req, res) => {
    const {clinic_Id, patient_Id, date} = req.body;

    console.log(clinic_Id);
})