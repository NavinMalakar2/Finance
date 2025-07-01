import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  phone: String,
  empId: String,
  adminId: String,
  role: {
    type: String,
    enum: ["admin", "employee"],
    required: true
  },
}, { timestamps: true });

export default mongoose.model("UserAdmin", userSchema);
