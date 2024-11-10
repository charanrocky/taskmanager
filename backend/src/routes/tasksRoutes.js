import express from "express";
import {
  createTask,
  deleteTask,
  getTask,
  getTasks,
  updateTask,
} from "../controllers/auth/task/taskController.js";
import { protect } from "../middleware/auth/authMiddleware.js";
const router = express.Router();

router.post("/task/create", protect, createTask);
router.get("/tasks", protect, getTasks);
router.get("/task/:id", protect, getTask);

router.patch("/task/:id", protect, updateTask);

router.delete("/task/:id", protect, deleteTask);
export default router;