const ObjectId = require("mongodb").ObjectId;

const Patient = require("../models/patient");
const Login = require("../models/login");
const asyncHandler = require("express-async-handler");
const { response } = require("express");
const Feedback = require("../models/feedback");

const addUser = asyncHandler(async (req, res) => {
  const { cust_id, loginId, custType, email, pwd, loginStatus } = req.body;

  const userExists = await Login.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("Email already exists. Please enter another email address");
    // return;
  }
  const user = await Login.create({
    cust_id,
    loginId,
    custType,
    email,
    pwd,
    loginStatus,
  });
  if (user) {
    res.status(201).json({
      cust_id: user.cust_id,
      loginId: user.loginId,
      custType: user.name,
      email: user.email,
      pwd: user.password,
      loginStatus: user.loginStatus,
    });
  } else {
    res.status(400);
    throw new Error("Error creating user");
    // return;
  }

  res.json({
    email,
  });
});
const login = asyncHandler(async (req, res) => {
  const { email, pass } = req.body;
  console.log("In login");
  const user = await Login.findOne({ email });
  console.log(user);
  if (user && (await user.matchPassword(pass))) {
    res.json({
      cust_id: user.cust_id,
      loginId: user.loginId,
      custType: user.custType,
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
const sendfeedback = asyncHandler(async (req, res) => {
  const {  feedback,
    doctorname,
    doctorid,
    servicetype } = req.body;

  const feedbackData = await Feedback.create({
    feedback,
    doctorname,
    doctorid,
    servicetype
  });
  if (feedbackData) {
    res.status(201).json({
      feedback : feedbackData.feedback,
    doctorname: feedbackData.doctorname,
    doctorid: feedbackData.doctorid,
    servicetype: feedbackData.servicetype,
    });
  } else {
    res.status(400);
    throw new Error("Error addding feedback");
    // return;
  }

  res.json({
    feedback,
  });
});
module.exports = {
  addUser,
  login,
  sendfeedback
};
