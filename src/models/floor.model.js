import mongoose from "mongoose";

const floorSchema = new mongoose.Schema({
  color: {
    type: String,
    required: true,
  },
  collection: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Set",
  },
  material: {
    type: String,
    enum: ["Laminate", "Vinyl"],
    default: "Vinyl"
  },
  installationMethod: {
    type: String,
    required: true
  },
  wearLayer: {
    type: String,
    required: true
  },
  overallThickness: {
    type: String,
    required: true
  }
});

export default mongoose.model("Floor", floorSchema);