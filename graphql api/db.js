require("dotenv").config();
const { createPool } = require('mysql2/promise');


// Create a MySQL connection pool
const db = createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    connectionLimit: 10,
    queueLimit: 0,
});

module.exports = db;