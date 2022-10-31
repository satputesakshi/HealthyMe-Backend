const mongoose = require("mongoose");

const appointmentSchema = mongoose.Schema(
  {
    clinic_Id: {
      type: String,
      required: true,
    },
    patient_Id: {
      type: String,
      required: true,
    },
    doctor_Id: {
      type: String,
      required: true,
    },
    service_type: {
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

const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;
