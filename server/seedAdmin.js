import mongoose from "mongoose";
import bcrypt from "bcryptjs";
// import userModel from '../models/userModel.js'
import dotenv from "dotenv";
import userModel from "./models/userModel.js";

dotenv.config(); // 🔥 This loads .env variables

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ Connected to MongoDB");
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err.message);
    process.exit(1);
  }
};

const seedAdmin = async () => {
  try {
    await connectDB();

    const adminExists = await userModel.findOne({ email: "admin@neofinance.com" });
    if (adminExists) {
      console.log("⚠️ Admin already exists");
      return;
    }

    const hashedPassword = await bcrypt.hash("admin123", 10);
    await userModel.create({
      name: "Main Admin",
      email: "admin@neofinance.com",
      password: hashedPassword,
      role: "admin"
    });

    console.log("✅ Admin seeded successfully");
    process.exit();
  } catch (err) {
    console.error("❌ Error seeding admin:", err);
    process.exit(1);
  }
};

seedAdmin();
