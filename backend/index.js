const express=require("express");
const mongoose=require("mongoose");
const app=express();
const userRouter=require("./routes/userroutes");
app.use(express.json());
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

app.get("/",(req,res)=>{
    res.send("hello");
})
app.listen(3000,()=>{
    console.log("server is listening");
})