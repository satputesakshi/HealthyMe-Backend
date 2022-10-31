const mongoose = require("mongoose");

const booking_historySchema = mongoose.Schema(
  {
    clinic_Id: {
      type: String,
      required: true,
    },
    patient_Id: {
      type: String,
      required: true,
    },

    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    appointment_no: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    patient_remarks: {
      type: String,
      required: true,
    },
    clinic_remarks: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Booking_History = mongoose.model(
  "Booking_History",
  booking_historySchema
);

module.exports = Booking_History;
