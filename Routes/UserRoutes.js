const express = require("express");
const router = express.Router();
const User = require("../models/User");

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
