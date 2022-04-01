const mongoose = require("mongoose");

const Schema = mongoose.Schema
const AutoIncrement = require('mongoose-sequence')(mongoose)
const Customer = new Schema({
    customer_name:{
        type:String,
        min:6,
        max : 255,
        require: true
    },
    customer_email:{
        type:String,
        min:6,
        max : 255,
    },
    customer_phone:{
        type:Number,
        
        require: true
    },
},{
    _id : false,
    timestamps : true

})

Customer.plugin(AutoIncrement, {id : 'product_id_couter'})
module.exports = mongoose.model("Customer",Customer)