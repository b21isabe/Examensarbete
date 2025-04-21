const express = require("express");
const db = require("../db");
const router = express.Router();

router.get("/", (req, res) => {
    const station_id = req.query.station_id;

    if (station_id) {
        db.query("SELECT * FROM cities WHERE station_id = ?", [station_id], (err, results) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json(results[0]);
        });
    } else {
        db.query("SELECT * FROM cities", (err, results) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json(results);
        });
    }
});

module.exports = router;
