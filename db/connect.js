import mongoose  from "mongoose";

// const uri = process.env.MONGO_URI || 'mongodb://localhost:27017/socialMediaDB';


const connectToDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/socialMediaDB');
        console.log("Connected to MongoDB successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

export default connectToDB;