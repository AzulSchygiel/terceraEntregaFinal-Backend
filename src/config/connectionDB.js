import mongoose from "mongoose";
import { config } from "./config.js";

export const connectDB = async() => {
    try {
        await mongoose.connect(config.mongo.url);
        console.log('Base de datos conectada');
    } catch (error) {
        console.log(`ERROR en la conexión a la base de datos ${error.message}`);
    }
}