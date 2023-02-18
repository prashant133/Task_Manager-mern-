// imporring mongoose
const mongoose = require("mongoose")

// creating an schema it means how the data is organized in the database
const taskSchema =mongoose.Schema
(
    {
        name:{
            type: String,
            required: [true,"please add a task"] // I want user to provide the name if not then provide error mentioned.
        },
        completed: {
            type: Boolean,
            required: true,
            default: false
        },
        
    },
    {
        timestamps: true, // this gonna saves the time when any event occured in the database
    }
    
    
)

const Task = mongoose.model("Task",taskSchema);

module.exports = Task; // so that we can use it in another file.