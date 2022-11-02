const mongoose = require('mongoose');

const User= require('./User')

const ProductSchema = new mongoose.Schema({
    productType:{
        type: String,
        required: true,
    },
    productName:{
        type: String,
        required: true,
    },
    imageURL:{
        type: String,
        required: true,
        validate: validImage
    },
  
    price:{
        type: Number,
        required: true,
    },
    creatorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
})
function validImage(val) {
    if (val.startsWith("http://") || val.startsWith("https://")) {
        return true
    } else {
        return false
    }
}

module.exports = mongoose.model('Product', ProductSchema);