const express = require ("express");
const mongoose = require("mongoose");
const app = express();
const userrouter = require("./routes/userroutes");
app.use(express.json());

const mongoDB=async()=>{
    await mongoose.connect("mongodb://localhost:27017/flight-booking");
}
mongoDB()
.then(()=>{
    console.log("connected to DB");
})
.catch((err)=>{
    console.log(err);
})

app.use("/api/user",userrouter);

app.get("/",(req,res)=>{
    res.send("hello");
})
app.listen(3000,(req,res)=>{
    console.log("port is listening ");
})