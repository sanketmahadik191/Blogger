const express = require('express');
const dotenv = require('dotenv');
const db = require('./config/db');
const app = express();

dotenv.config();

const PORT = process.env.PORT || 3000;
const DB_URL = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/test"

db(DB_URL);

app.get('/',(req,res)=>{
    res.status(201).json("Succesfull")
})

app.listen(PORT || 3000 , ()=>{
    console.log(`Server started on ${PORT}`)
})

app.use((err, req, res, next) => {
    console.error("Error:", err.stack);
    res.status(err.statusCode || 500).json({
        success: false,
        message: err.message || "Internal Server Error"
    });
});