const express = require("express");
const db = require("../db");
const router = express.Router();

router.get("/", (req, res) => {
    //temporary select query, so we dont load in 1 million rows of data
    db.query("SELECT * FROM weather_data WHERE observation_time = '2020/12/12 00:00:00'", (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

module.exports = router;
