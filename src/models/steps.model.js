import mongoose from "mongoose";

const stepsSchema = new mongoose.Schema({
  profile: {
    type: String,
    enum: ["Square", "Double Rounded", "L-Shade"],
    default: "Square"
  },
  brand: {
    type: String,
    required: true,
    trim: true,
  },
  color: {
    type: String,
    required: true,
    trim: true,
  },
  measurements: {
    type: Number,
    required: true,
  },
  edgeType: {
    type: String,
    required: true,
    trim: true,
  },
  stepType: {
    type: String,
    enum: ["Regular", "Full"],
    default: "Regular",
  },
  features: {
    type: [String],
  },
});

export default mongoose.model("Steps", stepsSchema);
