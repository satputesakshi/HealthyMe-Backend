const ObjectId = require("mongodb").ObjectId;

const Appointment = require("../models/appointment");
const asyncHandler = require("express-async-handler");
const { response } = require("express");

const app_fetch = asyncHandler(async (req, res) => {
  const { date, patient_id } = req.body;

  const appExists = await Appointment.findOne({ date, patient_id });
  if (appExists) {
    res.status(400);
    throw new Error("You have no upcoming appointment!");
    // return;
  }
});
const appointment = asyncHandler(async (req, res) => {
  const { date, patient_id } = req.body;
  console.log("searching appointment");
  const app_fetch = await Appointment.findOne({ email });
  console.log(user);
  if (user && (await user.matchPassword(pass))) {
    res.json({
      cust_id: user.cust_id,
      loginId: user.loginId,
      custType: user.name,
      email: user.email,
      pwd: user.password,
      loginStatus: user.loginStatus,
    });
  } else {
    console.log("Invalid credentials");
    throw new Error(
      "Inavlid credentials. Please enter with registered credentials."
    );
  }
});
module.exports = {
  addUser,
  login,
};
