require("dotenv").config();
const express = require("express");
const db = require("./db");
const citiesRoutes = require("./routes/cities");

const app = express();
const port = 3000;

app.use(express.json()); 
app.use("/cities", citiesRoutes);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

app.get("/", (req, res) => {
    res.send("API is working!");
});


