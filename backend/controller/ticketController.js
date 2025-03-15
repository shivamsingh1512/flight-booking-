const Ticket=require("../models/ticketSchema");
module.exports.createTicket=async(req,res)=>{
    try{
        console.log(req.user);
        const user = req.user._id;
        const{source , destination , ticketOwner,price,status,date}=req.body;
        if(!source|| !destination || !ticketOwner || !price || !status|| !date){
            throw new Error("feild cannot be empty");
        }
        const allowedStatus=["pending","confirm","cancel"];
        if (!allowedStatus.includes(status)){
            throw new Error("invalid status")
        }
        const ticket=new Ticket({
          owner:user, source , destination , ticketOwner,price,status,date
        });
        await ticket.save();
        res.status(201).send(ticket);
    }catch(err){
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