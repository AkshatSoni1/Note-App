import mongoose from "mongoose";
let isConnected = false;

const connectToMongoDB = async() =>{
    if(isConnected === false){
        try {
            await mongoose.connect(process.env.MONGODB_URI);
            console.log("Connected to MongoDB");
            isConnected = true;
        } catch (error) {
            console.log(error)
        }
    }
}

export default connectToMongoDB;