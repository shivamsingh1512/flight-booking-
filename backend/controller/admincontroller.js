const User = require("../models/user");
const validator = require("validator");
const Ticket = require("../models/ticketSchema")
const bcrypt = require("bcrypt");


module.exports.updateProfile = async (req, res) => {
  try {
    const { firstName, lastName, avatar, age, password } = req.body;
    const allowedFields = [
      "firstName",
      "lastName",
      "avatar",
      "age",
      "password",
    ];
    for (const field in req.body) {
      if (!allowedFields.includes(field)) {
        throw new Error("Field cannot be updated");
      }
    }
    const user = req.user;
    if (firstName) {
      user.firstName = req.body.firstName;
    }
    if (lastName) {
      user.lastName = req.body.lastName;
    }
    if (avatar) {
      user.avatar = req.body.avatar;
    }
    if (age) {
      user.age = req.body.age;
    }
    if(password && !validator.isStrongPassword(password)){
        throw new Error("Password is not strong ");
    }
    if (password) {
      user.password = bcrypt.hashSync(req.body.password, 10);
    }
    await user.save();
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
};

module.exports.getProfile= async(req,res)=>{
    try{
        const user = req.User;
        res.status(200).send(user);
    }
    catch(err){
        console.log(err);
    }
}

module.exports.getTickets=async(req,res)=>{
  try{
    const ticket=await Ticket.find({owner:req.user._id});
    res.status(201).send(ticket);
  }catch(err){
    console.log(err);
  }
}