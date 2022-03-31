const mongoose = require("mongoose");

const Schema = mongoose.Schema
const AutoIncrement = require('mongoose-sequence')(mongoose)
const Product = new Schema({
    product_name:{
        type:String,
        min:6,
        max : 255,
        require: true
    },
    product_image:{
        type:String,
        min:6,
        max : 255,
    },
    category_name:{
        type:String,
        min:6,
        max : 255,
        require: true
    },
    brand_name:{
        type:String,
        min:6,
        max : 255,
        require: true
    },
    product_desc:{
        type:String,
        min:6,
        max : 255,
        require: true
    },
    product_price:{
        type:Number,
        require: true
    },
    product_status:{
        type:Number,
        require: true
    },
},{
    _id : false,
    timestamps : true

})

Product.plugin(AutoIncrement, {id : 'product_id_couter'})
module.exports = mongoose.model("Product",Product)