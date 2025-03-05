const express = require("express");
const mongoose = require("mongoose");
const User = require("../models/user");
const validator = require("validator");

module.exports.signUp= async(req,res)=>{
    const {firstname,lastname,age,gender,email,password} = req.body;
    try{
        if(!email|| !password|| !firstname||!lastname||! age|| !gender  ){
            res.json({message:"please enter the full detils"})
            
        }
        console.log(email);
        const useremail= await User.findOne({email:email});
       
        if(useremail){
            res.json({message:"email is already exits"})
        }
        if(!validator.isEmail(email)){
            res.send("email is not proper");
        }
        if(!validator.isStrongPassword(password)){
            res.send("give strong password");
        }
    } catch(err){
        console.log(err);
    }
}

