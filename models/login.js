const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const loginSchema = mongoose.Schema(
  {
    cust_id: {
      type: String,
      required: false,
    },
    loginId: {
      type: String,
      required: false,
    },
    custType: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    pwd: {
      type: String,
      required: true,
    },
    otp: {
      type: String,
      required: false,
    },
    loginStatus: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

loginSchema.pre("save", async function (next) {
  if (!this.isModified("pwd")) {
    next();
  }

  const salt = await bcrypt.genSalt(9);
  this.pwd = await bcrypt.hash(this.pwd, salt);
});

loginSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.pwd);
};

const Login = mongoose.model("Login", loginSchema);

module.exports = Login;
