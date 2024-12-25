import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: {
    type: String, // Corrected "typpe" to "type"
    required: true,
    unique: true,
  },
  slug: {
    type: String, // Corrected "typpe" to "type"
    lowercase: true,
  },
});

// Correct export statement
export default mongoose.model("Category", categorySchema);
