const express = require("express");
const db = require("../db");
const router = express.Router();

router.get("/", (req, res) => {
    const { station_id, city_name } = req.query;

    if (station_id) {
        db.query("SELECT * FROM cities WHERE station_id = ?", [station_id], (err, results) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json(results[0]);
        });
    } else if (city_name) {
        db.query("SELECT * FROM cities WHERE city_name = ?", [city_name], (err, results) => {
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
