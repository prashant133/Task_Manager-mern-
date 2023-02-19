
const dotenv = require("dotenv").config();// this gives the access to the env file for server.js so that we could connect mongoDB.

const express = require("express")
const app = express();

const connectDB = require("./config/connectDB") // importing connectDb file from config

const mongoose = require("mongoose");

const Task = require("./models/taskModel");// importing taskModel from model dir

const taskRoutes =  require("./routes/taskRoute")


// middeware is the function that has the acess to ther request,response of the route and also has next function.
app.use(express.json())// takes the value from the api body.
// const logger = (req,res,next) => {
//     console.log("middle ware ran");
//     console.log(req.method);
//     next();

// }
app.use(taskRoutes); // taken from the routes



// creating an routes
//home page
app.get("/", (req,res)=>{
    res.send("home page");
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