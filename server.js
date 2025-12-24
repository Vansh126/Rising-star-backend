require("dotenv").config();
const express = require("express")
const mongoose = require("mongoose")
const app = express()
const router = express.Router()
const cors = require("cors");
app.use(express.json());

if (!process.env.MONGO_URI) {
    console.error("MONGO_URI environment variable is missing");
    process.exit(1);
}
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("✅ MongoDB Atlas Connected"))
    .catch((err) => {
        console.error("❌ MongoDB connection error:", err.message);
        process.exit(1);
    });

const allowedOrigins = [
    "https://new-rising-star-badminton-academy.netlify.app",
    "http://localhost:5173"
];

app.use(cors({
    origin: (origin, cb) => {
        if (!origin || allowedOrigins.includes(origin)) return cb(null, true);
        cb(new Error("Not allowed by CORS"));
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

const userRoutes = require("./Routes/UserRoutes");
app.use("/api/users", userRoutes);
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})
