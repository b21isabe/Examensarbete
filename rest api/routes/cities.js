const express = require("express");
const db = require("../db");
const router = express.Router();

router.get("/", (req, res) => {
    db.query("SELECT * FROM cities", (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

module.exports = router;
