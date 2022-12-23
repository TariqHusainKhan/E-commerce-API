const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb+srv://tariq:<password>@cluster0.6x5jlau.mongodb.net/Ecommerce-Api")
        .then(()=>console.log("DB Connection Successful!!"))
         .catch((err) =>{
            console.log(err);
         });
app.listen(5000, ()=>{
    console.log("Backend Server is running!");
});