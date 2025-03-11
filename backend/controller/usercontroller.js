const mongoose=require("mongoose");
const User=require("../models/user");
const validator=require("validator");
const user = require("../models/user");
const bcrypt = require("bcrypt");
module.exports.signup= async (req,res)=>{
    console.log(req.body);
    const {firstName,lastName,age,gender,email,password,avatar}=req.body;
    try{
        if(!email || !password || !firstName || !lastName || !gender || !age ){
            res.json({message:"please enter full details"});
        }
        const userEmail=await User.findOne({email:email});
        if(userEmail){
            res.json({message:"email already exits"});
        }
        if(!validator.isEmail(email)){
            res.send("email not correct");
        }
        if(!validator.isStrongPassword(password)){
            res.send("Password not strong");
        }
        const  hashedPass = await bcrypt.hash(password,10);
        const user=new User({
            firstName,
            lastName,
            age,
            gender,
            email,
            password: hashedPass,
            avatar
        });
        await user.save();
        res.send(user);
    }catch(err){
        console.log(err);
    }
}

module.exports.login=async(req,res)=>{
    try{
        const {email ,password} = req.body;
        const user = await User.findOne({email});
        console.log(user);
        if(!user){
            res.status(400).send("invalid email")
        }
        const comaparePass  =await bcrypt.compare(password,user.password);
        if(!comaparePass){
            res.status(400).send("invalid password")
        }
        res.status(200).send("login succesfully")
    } catch(err){ 
        console.log(err);
    }
}

module.exports.updateProfile=async(req,res)=>{
    try{
        const{ firstName , lastName , age , avatar , password } = req.body;
        
    }catch(err){
        console.log(err);
    }
}