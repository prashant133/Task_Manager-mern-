
// connection of mongodb datbase
const mongoose = require("mongoose");

const connectDB = async () => {
    try{
        const connect = await mongoose.connect(process.env.MONGO_URI);// MONGO_URI is from env file.
        console.log(`MongoDb connect ${connect.connection.host}`);
    }catch{
        console.log(error)
        process.exit();
    }
}

module.exports = connectDB // it is done so that we could use it in other file