const express = require("express");
const mongoose = require("mongoose");
const app = express();



//middlewares
app.use("/",(req,res,next)=>{
    res.send("It is working")
})


//Connect to DB
mongoose.connect("mongodb+srv://admin:vGXSCJ6UfaqF9xoe@teamflow.yrujq0y.mongodb.net/")
.then(()=>{
    console.log("Connected to DB 😍")
.then(() => {
    app.listen(5000)
})
})
.catch((err)=>{
    console.log(err)
})
//vGXSCJ6UfaqF9xoe
