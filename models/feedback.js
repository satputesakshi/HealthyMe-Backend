const mongoose = require("mongoose");

const feedbackSchema = mongoose.Schema(
  {
    doctorid: {
      type: String,
      required: true,
    },
    servicetype: {
      type: String,
      required: true,
    },
    feedback: {
      type: String,
      required: true,
    },
    doctorname: {
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
