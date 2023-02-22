const express = require("express");
const { createTask, getTasks, getTask, deleteTask, updateTask } = require("../controllers/taskController");
const Task = require("../models/taskModel");
const router = express.Router();


// routes 
router.post("/api/tasks" ,createTask);
router.get("/api/tasks",getTasks);
router.get("/api/tasks/:id" , getTask);
router.delete("/api/tasks/:id",deleteTask);
router.put("/api/tasks/:id",updateTask);

module.exports = router// so that we can import it into anthore file