const mongoose = require("mongoose");

const clinicSchema = mongoose.Schema(
  {
    clinic_Id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    doi: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address_Line_1: {
      type: String,
      required: true,
    },
    address_Line_1: {
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
    open_time_mon: {
      type: String,
      required: true,
    },
    closetime_mon: {
      type: String,
      required: true,
    },
    open_time_tue: {
      type: String,
      required: true,
    },
    closetime_tue: {
      type: String,
      required: true,
    },
    open_time_wed: {
      type: String,
      required: true,
    },
    closetime_wed: {
      type: String,
      required: true,
    },
    open_time_thu: {
      type: String,
      required: true,
    },
    closetime_thu: {
      type: String,
      required: true,
    },
    open_time_fri: {
      type: String,
      required: true,
    },
    closetime_fri: {
      type: String,
      required: true,
    },
    open_time_sat: {
      type: String,
      required: true,
    },
    closetime_sat: {
      type: String,
      required: true,
    },
    open_time_sun: {
      type: String,
      required: true,
    },
    closetime_sun: {
      type: String,
      required: true,
    },
    announcement: {
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
    clini_synopsys: {
      type: String,
      required: true,
    },
    rating: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Clinic = mongoose.model("Clinic", ClinicSchema);

module.exports = Clinic;
