import mongoose from "mongoose";

const counterSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  seq: { type: Number, default: 1 },
});

export default mongoose.model("Counter", counterSchema);
