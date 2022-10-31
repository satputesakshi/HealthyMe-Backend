const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const loginSchema = mongoose.Schema(
  {
    cust_id: {
      type: String,
      required: true,
    },
    loginId: {
      type: String,
      required: true,
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
      required: true,
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
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(9);
  this.password = await bcrypt.hash(this.password, salt);
});

loginSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const Login = mongoose.model("Login", loginSchema);

module.exports = Login;
