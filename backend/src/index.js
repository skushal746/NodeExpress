
import dotenv from "dotenv";
import connectDB from "./config/database.js";
dotenv.config({
    path: "./.env"
});

import app from "./app.js";

const startServer = async () => {
    try {
        await connectDB();

        app.on("error", (error) => {
            console.log("ERROR : ", error);
            throw error;
        });

        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server running on port ${process.env.PORT}`);
        });
    } catch (error) {
        console.log("Mongo DB connection failed. Error : ", error);
        process.exit(1);
    }
}

console.log("Calling startServer...");
startServer();
