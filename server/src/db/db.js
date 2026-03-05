const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        console.log("Connecting to MongoDB...");
        
        // Inga process.env.MONGO_URI correct-ah load aagudha nu check pannum
        if (!process.env.MONGO_URI) {
            throw new Error("MONGO_URI is missing in .env file!");
        }

        // 5 seconds-kulla connect aagala na error kaatum, server-ah block pannaadhu
        await mongoose.connect(process.env.MONGO_URI, {
            serverSelectionTimeoutMS: 5000 
        });
        
        console.log("Database Connected Successfully! ✅");
    } catch (error) {
        console.error("Database Connection Failed: ❌", error.message);
        console.log("Tip: Check your Internet or MongoDB Atlas 'Network Access' settings.");
        // process.exit(1); // Idhai comment panni vaipom, appo dhaan API test panna mudiyum
    }
};

module.exports = connectDB;