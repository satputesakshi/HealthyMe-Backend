const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const patientSchema = mongoose.Schema(
  {
    fName: {
      type: String,
      required: true,
    },
    mName: {
      type: String,
      required: true,
    },
    lName: {
      type: String,
      required: true,
    },
    id_type: {
      type: String,
      required: true,
    },
    health_card: {
      type: String,
      required: true,
    },
    dob: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address_line_1: {
      type: String,
      required: true,
    },
    address_line_2: {
      type: String,
      required: true,
    },
    pin_code: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    height: {
      type: String,
      required: true,
    },
    weight: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    reg_date: {
      type: String,
      required: true,
    },
    patientId: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;
