require("dotenv").config();
const express = require("express");
const db = require("./db");
const citiesRoutes = require("./routes/cities");
const weatherRoutes = require("./routes/weatherdata");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());

app.use(express.json()); 
app.use("/cities", citiesRoutes);
app.use("/weatherdata", weatherRoutes);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

app.get("/", (req, res) => {
    res.send("API is working!");
});


