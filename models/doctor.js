const mongoose = require("mongoose");

const doctorSchema = mongoose.Schema(
  {
    doctor_Id: {
      type: String,
      required: true,
    },
    doctor_name: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
    year_of_practice: {
      type: String,
      required: true,
    },
    degree: {
      type: String,
      required: true,
    },
    speciality: {
      type: String,
      required: true,
    },
    doctor_synopsys: {
      type: String,
      required: true,
    },
    clinic_id: {
      type: String,
      required: true,
    },
    appointment_no: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Doctor = mongoose.model("Doctor", doctorSchema);

module.exports = Doctor;
