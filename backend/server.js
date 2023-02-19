
const dotenv = require("dotenv").config();// this gives the access to the env file for server.js so that we could connect mongoDB.

const express = require("express")
const app = express();

const connectDB = require("./config/connectDB") // importing connectDb file from config

const mongoose = require("mongoose");

const Task = require("./model/taskmodel");// importing taskmodles from model dir


// middeware is the function that has the acess to ther request,response of the route and also has next function.
app.use(express.json())// takes the value from the api body.
// const logger = (req,res,next) => {
//     console.log("middle ware ran");
//     console.log(req.method);
//     next();

// }



// creating an routes
//home page
app .get("/", (req,res)=>{
    res.send("home page");
})
// task route
app.post("/api/tasks"  ,async (req,res)=>{
    // saving data to database
    try {
        const task = await Task.create(req.body);
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
    
})







const PORT =process.env.PORT || 5000; // when we deploy to heruko server gonna look for the port...
                                      //heruko gonna provide us with port if not the we use 5000 and the port is save in env file.


                                      
// second way to connect to the database
mongoose
    .connect(process.env.MONGO_URI)
    //before conneting to the server we have to connect to the mongodb first.
    .then(()=> {
        app.listen(PORT, () => {
            console.log(`serving running on ${PORT} port`)
        })
    })
    .catch((err) => console.log(err));



// this below code of line means connect to the database before firing the sever
/* const startServer = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`serving running on ${PORT} port`)
        })
    } catch (error) {
        console.log(error)
        
    }
};

startServer(); */