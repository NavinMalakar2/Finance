
import User from "../models/adminModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// ⚙️ Admin Login
export const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Find user
    const admin = await User.findOne({ email });
    if (!admin) return res.status(404).json({ msg: "Admin not found" });

    // 2. Check role
    if (admin.role !== "admin") {
      return res.status(403).json({ msg: "Access denied. Not an admin." });
    }

    // 3. Check password
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

    // 4. Create token
    const token = jwt.sign({ id: admin._id, role: admin.role }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    // 5. Send response
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "Lax",
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.json({ msg: "Login successful", role: admin.role, user: admin });
  } catch (err) {
    res.status(500).json({ msg: "Server error", error: err.message });
  }
};


export const createEmployee = async (req, res) => {
  try {
    const { name, email, phone, password, role } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ msg: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      name, email, phone, password: hashedPassword, role
    });

    res.status(201).json({ msg: "Employee added", user: newUser });
  } catch (err) {
    res.status(500).json({ msg: "Error adding employee", error: err.message });
  }
};

export const getAllEmployees = async (req, res) => {
  try {
    const employees = await User.find({ role: "employee" });
    res.json({ employees });
  } catch (err) {
    res.status(500).json({ msg: "Error fetching employees" });
  }
};

export const deleteEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.json({ msg: "Employee deleted" });
  } catch (err) {
    res.status(500).json({ msg: "Error deleting employee" });
  }
};

export const getAllAdmins = async (req, res) => {
  try {
    const admins = await User.find({ role: "admin" });
    res.json({ admins });
  } catch (err) {
    res.status(500).json({ msg: "Error fetching admins" });
  }
};
// ✅ Add Another Admin
export const addNewAdmin = async (req, res) => {
  try {
    const { name, email, password = "admin123", role } = req.body;

    // Validate
    if (role !== "admin") {
      return res.status(400).json({ msg: "Role must be 'admin'" });
    }

    const existingAdmin = await User.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({ msg: "Admin already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newAdmin = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });

    res.status(201).json({ msg: "New admin added", admin: newAdmin });
  } catch (err) {
    res.status(500).json({ msg: "Failed to add admin", error: err.message });
  }
};

// 🗑 Delete Admin
export const deleteAdmin = async (req, res) => {
  try {
    const { id } = req.params;

    // Optional: prevent deleting self
    if (req.user.id === id) {
      return res.status(400).json({ msg: "You cannot delete your own account" });
    }

    const deleted = await User.findOneAndDelete({ _id: id, role: "admin" });

    if (!deleted) {
      return res.status(404).json({ msg: "Admin not found" });
    }

    res.json({ msg: "Admin deleted successfully" });
  } catch (err) {
    res.status(500).json({ msg: "Failed to delete admin", error: err.message });
  }
};
// 