const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const Posts = require('./Post')

const UserSchema = new mongoose.Schema({
    firstName:{
        type: String,
        },
    lastName:{
        type: String,
       
    },
   imageURL:{
        type: String,
    },
    phoneNumber:{
        type: String,
    },
   occupation:{
        type: String,
    },
    location:{
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
        type:  mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }]
})

UserSchema.methods = {

    matchPassword: function (password) {
        return bcrypt.compare(password, this.password);
    }

};
let saltRounds = 10
UserSchema.pre('save', function (next) {
    if (this.isModified('password')) {
        bcrypt.genSalt(saltRounds, (err, salt) => {
            bcrypt.hash(this.password, salt, (err, hash) => {
                if (err) { next(err); return }
                this.password = hash;
                next();
            });
        });
        return;
    }
    next();
});


module.exports = mongoose.model('User', UserSchema);