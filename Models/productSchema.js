const mongoose = require('mongoose');

const mySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    ProductType:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true
    },
    ram:String,
    cpu:String,
    ScreenSize:String,
    rating:{
        type:Number,
        default:0
    },
    size:String,
    color:String,
    forGender:String,
    waranaty:String,
    brand:String,
    author:String,
    publisher:String,
    versionOrEdition:Number,
    sellerId:{
        type:Number,
        required:true
    }

})
const product = new mongoose.model('product',mySchema);
module.exports= product;
