const express = require("express");
const db = require("../db");
const router = express.Router();

router.get("/", (req, res) => {

    const { station_id, start_date, days } = req.query;
    const parsedStationId = parseInt(station_id, 10);
    const parsedDays = parseInt(days, 10);

    const query = `
    SELECT station_id, 
    DATE_FORMAT(observation_time, '%Y-%m-%d %H:%i:%s') AS observation_time, 
    wind_direction, wind_speed, visibility, temperature, dew_point, atmospheric_pressure, ceiling
    FROM weather_data 
    WHERE station_id = ? 
    AND observation_time >= ? 
    AND observation_time < DATE_ADD(?, INTERVAL ? DAY)
    `;
    

    db.query(query,[parsedStationId, start_date, start_date, parsedDays], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

module.exports = router;
