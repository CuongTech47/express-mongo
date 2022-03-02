const mongoose = require("mongoose");

const Schema = mongoose.Schema
const AutoIncrement = require('mongoose-sequence')(mongoose)
const Brand = new Schema({
    brand_name:{
        type:String,
        min:6,
        max : 255,
        require: true
    },
    brand_desc:{
        type:String,
        min:6,
        max : 255,
        require: true
    },
    brand_status:{
        type:String,
        min:6,
        max : 255,
        require: true
    },
},{
    _id : false,
    timestamps : true

})

Brand.plugin(AutoIncrement, {id : 'brand_id_couter'})
module.exports = mongoose.model("Brand",Brand)