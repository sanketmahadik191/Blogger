const jwt = require("jsonwebtoken");
const dotenv = require('dotenv');

dotenv.config();

// Function to generate JWT Token
const generateToken = (userId) => {
    console.log("token genrated");
    return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
        expiresIn: "1d", 
    });
};

module.exports = generateToken;
