const express = require('express');
const dotenv = require('dotenv');
const db = require('./config/db');
const app = express();
const cors = require('cors');
const userRoutes = require('./routes/user.routes');
const blogRoutes = require('./routes/blog.routes');
const corsOptions = {
    origin: "*",
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  };

dotenv.config();
app.use(cors(corsOptions));
app.options("*", cors(corsOptions));
app.use(express.json());


const PORT = process.env.PORT || 3000;
const DB_URL = process.env.MONGO_URL;

db(DB_URL);

app.use('/api/auth',userRoutes);
app.use('/api/blogs',blogRoutes)

app.get('/',(req,res)=>{
    res.status(201).json("Succesfull")
})



app.use((err, req, res, next) => {
    console.error("Error:", err.stack);
    res.status(err.statusCode || 500).json({
        success: false,
        message: err.message || "Internal Server Error"
    });
});

app.listen(PORT || 3000 , ()=>{
    console.log(`Server started on ${PORT}`)
})