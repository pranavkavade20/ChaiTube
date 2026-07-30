import mongoose from "mongoose";
import { DB_NAME } from "../constants.js"

// connectDB initializes the MongoDB connection using Mongoose.
// It reads the database host from the environment variable and appends the configured DB name.
const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        // Log the host name on successful connection for diagnostics.
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        // If the database connection fails, log the error and terminate the process.
        console.log("MONGODB connection FAILED", error);
        process.exit(1)
    }
}

export default connectDB