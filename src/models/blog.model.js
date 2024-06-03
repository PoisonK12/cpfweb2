import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  pictures: {
    type: [String],
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  paragraphs: {
    type: [String],
    required: true
  },
});

export default mongoose.model("Blog", blogSchema);
