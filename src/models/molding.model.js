import mongoose from "mongoose";

const moldingSchema = new mongoose.Schema({
  profile: {
    type: String,
    enum: ["Reducer", "End Cap", "T-Molding", "Stair Noise Overlap"],
    default: "Reducer",
  },
  img: {
    type: [String],
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  measurements: {
    type: Number,
    required: true,
  },
  features: {
    type: [String],
  },
});

export default mongoose.model("Molding", moldingSchema);
