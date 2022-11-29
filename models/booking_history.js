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
      type: Date,
      required: true,
    },
    status: {
      type: String,
    },
    patient_remarks: {
      type: String,
    },
    clinic_remarks: {
      type: String,
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
