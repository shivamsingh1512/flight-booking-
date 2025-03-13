const express=require("express");
const mongoose=require("mongoose");
const app=express();
const userRouter=require("./routes/userroutes");
const profileRouter = require("./routes/profileRouter")
const ticketRouter = require("./routes/ticketRouter")
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
const mongoDB=async()=>{
    await mongoose.connect("mongodb://localhost:27017/flight_booking");
}
mongoDB()
.then(()=>{
    console.log("connected to DB");
})
.catch((err)=>{
    console.log(err);
})
app.use("/api/user/",userRouter)
app.use("/api/profile",profileRouter);
app.use("/api/ticket",ticketRouter);
app.get("/",(req,res)=>{
    res.send("hello");
})
app.listen(3000,()=>{
    console.log("server is listening");
})