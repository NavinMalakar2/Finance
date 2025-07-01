
import express from "express";
import { addNewAdmin, createEmployee, deleteAdmin, deleteEmployee, getAllAdmins, getAllEmployees } from "../controllers/admin.controller.js";


const router = express.Router();

router.post("/create-employee", createEmployee);
router.get("/employees", getAllEmployees);
router.delete("/employee/:id", deleteEmployee);
router.get("/admins", getAllAdmins);
router.delete("/deleteadmin/:id",deleteAdmin);
router.post("/addadmin",addNewAdmin);

export default router;
