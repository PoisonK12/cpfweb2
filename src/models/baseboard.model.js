import mongoose from "mongoose";

const baseboardSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: true,
  },
  img: {
    type: [String],
    required: true,
  },
  style: {
    type: String,
    enum: ["Contemporaneo", "Clasico"],
    default: "Clasico",
  },
  material: {
    type: String,
    enum: ["Laminate", "Vinyl"],
    default: "Vinyl",
  },
  measurements: {
    type: Number,
    required: true,
  },
  pcsPerPallet: {
    type: Number,
    required: true,
  },
  features: {
    type: [String],
  },
});

export default mongoose.model("Baseboard", baseboardSchema);
