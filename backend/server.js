
const dotenv = require("dotenv").config();// this gives the access to the env file for server.js so that we could connect mongoDB.
const express = require("express")
const connectDB = require("./config/connectDB") // importing connectDb file from config
const app = express();


// creating an routes
app .get("/", (req,res)=>{
    res.send("home page");
})






const PORT =process.env.PORT || 5000; // when we deploy to heruko server gonna look for the port...
                                      //heruko gonna provide us with port if not the we use 5000 and the port is save in env file.


                                      


// this below code of line means connect to the database before firing the sever
const startServer = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`serving running on ${PORT} port`)
        })
    } catch (error) {
        console.log(error)
        
    }
};

startServer();