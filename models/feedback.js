const mongoose = require("mongoose");

const feedbackSchema = mongoose.Schema(
  {
    doctor_id: {
      type: String,
      required: true,
    },
    service_type: {
      type: String,
      required: true,
    },
    reg_date: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Feedback = mongoose.model("Feedback", feedbackSchema);

module.exports = Feedback;
