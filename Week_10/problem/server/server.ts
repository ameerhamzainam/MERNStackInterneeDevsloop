import dotenv from "dotenv";
import app from "./app.ts";
import connectDB from "./config/db.ts";

dotenv.config();

const PORT = process.env.PORT || 5000;

const startServer = async () => {
    try {
        // 1. Connect to Database first
        await connectDB();
        console.log("✅ Database connected successfully");

        // 2. Start the server only ONCE
        app.listen(PORT, () => {
            console.log(`🚀 Server is running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("❌ Failed to start server:", error);
        process.exit(1); 
    }
};

startServer();
