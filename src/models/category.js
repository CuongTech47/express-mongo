const mongoose = require("mongoose");

const Schema = mongoose.Schema
const AutoIncrement = require('mongoose-sequence')(mongoose)
const Category = new Schema({
    category_name:{
        type:String,
        min:6,
        max : 255,
        require: true
    },
    category_desc:{
        type:String,
        min:6,
        max : 255,
        require: true
    },
    category_status:{
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