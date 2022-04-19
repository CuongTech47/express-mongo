const mongoose = require("mongoose");

const Schema = mongoose.Schema
const AutoIncrement = require('mongoose-sequence')(mongoose)
const Shipping = new Schema({
    shipping_name:{
        type:String,
        min:6,
        max : 255,
        require: true
    },
    shipping_address:{
        type:String,
        min:6,
        max : 255,
        require: true
    },
    shipping_phone:{
        type:Number,
        require: true
    },
    shipping_email:{
        type:String,
        min:6,
        max : 255,
        require: true
    },
},{
    _id : false,
    timestamps : true

})

Category.plugin(AutoIncrement, {id : 'category_id_couter'})
module.exports = mongoose.model("Category",Category)