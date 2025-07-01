import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

export const isAdmin = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ msg: "No token, unauthorized" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(decoded.id);

    if (!user || user.role !== "admin") {
      return res.status(403).json({ msg: "Access denied. Admins only." });
    }

    req.user = user;
    next();
  } catch (err) {
    return res.status(500).json({ msg: "Token verification failed" });
  }
};
