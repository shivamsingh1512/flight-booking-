const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    firstname:{
        type:String,
        require: true,
    },
    lastname:{
        type:String,
        require:true,
    },
    age : {
        type: Number
    },
    gender:{
        type:String,
        require:true
    },
    email:{
        type: String,
        require: true,
        unique: true,
    },
    password:{
        type : String,
        require:true
    },
    avatar:{
        type:String,
        default:"https://tse1.mm.bing.net/th?id=OIP.qFcA88YU9jE3ULnYGWwI9QHaHw&pid=Api&P=0&h=180"
    }

})

module.exports = mongoose.model("user",userSchema);