const mongoose = require('mongoose');

const db = async(url) => {
    try{
     await mongoose.connect(url);

    console.log("dataBase conneted");
    }
    catch(error){
        console.log("sever failed");
    }
}

module.exports =db;