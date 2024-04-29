import mongoose from "mongoose";
import dotenv from 'dotenv'

// Load environment variables from .env file
dotenv.config({ path: './config/.env' });

const Connection = async () => {
    try {
        // Check if URL variable is defined
        if (!process.env.URL) {
            throw new Error('MongoDB URL is not defined in the environment variables.');
        }

        console.log("MongoDB URL:", process.env.URL);
        await mongoose.connect(process.env.URL);
        console.log("Connected to MongoDB")
    } catch (err) {
        console.error("Error:", err.message);
    }
}

Connection();

Connection()