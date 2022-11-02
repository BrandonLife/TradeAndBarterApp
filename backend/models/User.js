const mongoose = require('mongoose');

const Posts = require('./Post')

const UserSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
        
    },
    lastName:{
        type: String,
        required: true,
    },
    phoneNumber:{
        type: String,
        required: true,
    },
   occupation:{
        type: String,
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,

    },
    password: {
        type: String,
        required: true,
        minLength: 4
    },
  
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }],
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }]
})

module.exports = mongoose.model('User', UserSchema);