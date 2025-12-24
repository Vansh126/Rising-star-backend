require("dotenv").config();
const express = require("express")
const mongoose = require("mongoose")
const app = express()
const cors = require("cors");
app.use(express.json());
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("✅ MongoDB Atlas Connected"))
    .catch((err) => {
        console.error("❌ MongoDB connection error:", err.message);
        process.exit(1);
    });
app.use(cors({
    origin: "https://new-rising-star-badminton-academy.netlify.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

const userRoutes = require("./Routes/UserRoutes");
app.use("/api/users", userRoutes);
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})