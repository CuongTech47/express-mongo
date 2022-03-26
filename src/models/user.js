const mongoose = require("mongoose");

const Schema = mongoose.Schema
const AutoIncrement = require('mongoose-sequence')(mongoose)
const User = new Schema({
    user_name:{
        type:String,
        min:6,
        max : 255,
        require: true
    },
    user_pic:{
        type:String,
        min:6,
        max : 255,
        require: true
    },
    user_email:{
        type:String,
        min:6,
        max : 255,
        require: true
    },
},{
    _id : false,
    timestamps : true

})

User.plugin(AutoIncrement, {id : 'user_id_couter'})
module.exports = mongoose.model("User",User)