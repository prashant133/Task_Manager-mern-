const Task = require("../models/taskModel");

// create a task
const createTask = async(req,res) => {
       // saving data to database (create)
    try {
        const task = await Task.create(req.body);
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

// get all task 
const getTasks = async(req,res) =>{
     //reading the data from database
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

// get a single task
const getTask = async(req,res) => {
    // getting a single task from the database
    try {
        const {id} = req.params;
        const task = await Task.findById(id);
        // if data is not found in the database.
        if(!task){
            return res.status(404).json(`No task with id: ${ id }`);
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

// delete a task

const deleteTask = async(req,res) =>{
    try {
        const {id} = req.params;
        const task = await Task.findByIdAndDelete(id);

        if(!task){
            return res.status(404).json(`No task with id: ${ id }`);
        }

        res.status(200).send("Task deleted");// we used send  methond here because i don't want back any task
    } catch (error) {
        res.status(500).json({msg: error.message});
        
    }

}

// update a task
//we can use put or patch method to update the task
// if we are using patch then we can choose only one property to update. likewise if i want to update the complete default value to true then we use patch.
// when you are updating any thing in the database the validdation you provided in schema does not apply unless you use runValidators method

const updateTask = async(req,res) => {
    try {
        const {id} = req.params;
        const task = await Task.findByIdAndUpdate(
            {_id: id,},req.body,{new:true,runValidators:true}
        );
        if(!task){
            return res.status(404).json(`No task with id: ${ id }`);
        }
        res.status(200).json(task)

    } catch (error) {
        res.status(500).json({msg: error.message});
        
    }

}

module.exports = {
    createTask,getTasks,getTask,deleteTask,updateTask
}