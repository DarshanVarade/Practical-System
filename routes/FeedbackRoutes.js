import {
  createAdmin,
  createTeacher,
  createStudent,
  getAllUsers,
} from "../controllers/userController.js";
import {
  createSubject,
  getSubject,
} from "../controllers/subjectController.js";
import {
  createPractical,
  getAllPractical,
} from "../controllers/practicalController.js";
import { EnrollPractical } from "../controllers/EnrollController.js";
import express from "express";
import { isAdmin } from "../middleware/Middleware.js";
import { isTeacher } from "../middleware/Middleware.js"


const router = express.Router();

router.post("/admin/create", createAdmin);
router.post("/Teacher/create", createTeacher);
router.post("/student/create", createStudent);
router.post("/Subject/create", isAdmin, createSubject);
router.post("/Practical/create", isTeacher , createPractical);
router.post("/Enroll/add", EnrollPractical);
router.get("/user/get", getAllUsers);
router.get("/Subject/get", getSubject);

export default router;
