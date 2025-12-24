const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/all", async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({
            message: "Error fetching data",
            error: error.message,
        });
    }
})
router.get("/", async (req, res) => {
    try {
        const users = await User.find().sort({ _id: -1 });
        res.status(200).json({ success: true, data: users });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});
router.post("/join", async (req, res) => {
    try {
        const user = await User.create(req.body);

        res.status(201).json({
            success: true,
            message: "User joined successfully",
            data: user
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});
module.exports = router;
