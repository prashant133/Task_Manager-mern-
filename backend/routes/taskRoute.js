const express = require("express");
const Task = require("../model/taskModel");
const router = express.Router();


// task route
router.post("/api/tasks"  ,async (req,res)=>{
    // saving data to database (create)
    try {
        const task = await Task.create(req.body);
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
    
});

//Get/Read task
router.get("/api/tasks", async (req,res) => {
    //reading the data from database
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
});

module.exports = router// so that we can import it into anthore file