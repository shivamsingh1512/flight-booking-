const express = require("express");
const { updateProfile , getProfile, getTickets } = require("../controller/admincontroller");
const userAuth = require("../middleware/userAuth");
const router=express.Router();

router.patch("/edit",userAuth,updateProfile);
router.get("/getprofile",userAuth,getProfile);
router.get("/ticket",userAuth,getTickets);
module.exports=router;
