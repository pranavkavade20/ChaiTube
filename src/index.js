// require('dotenv').config({path:'./env'}) //old appreach

import dotenv from "dotenv"
import connectDB from "./db/index.js"
import { app } from "./app.js"

// Load environment variables from the local .env-like file.
dotenv.config({
    path: './env'
})

// Connect to MongoDB before starting the web server.
// connectDB returns a promise so we handle readiness in .then/.catch.
connectDB()
    .then(() => {
        // Attach an error listener to the Express app.
        app.on("error", (error) => {
            console.log("ERROR:", error);
            throw error
        })
        // Start listening on the configured port or fallback to 8000.
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running at port:${process.env.PORT}`);
        })
    })
    .catch((err) => {
        // If MongoDB connection fails, log the error and do not start the server.
        console.log("MONGO db connection failed !!!", err);
    })






/*
import express from "express"
const app = express()

    (async () => {
        try {
            await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
            app.on("error", (error) => {
                console.log("ERROR:", error);
                throw error
            })
            app.listen(process.env.PORT,()=>{
                console.log(`App is listening on port ${process.env.PORT}`);
            })
        
        } catch(error){
            console.error("ERROR:",error)
            throw error
        }
})()*/