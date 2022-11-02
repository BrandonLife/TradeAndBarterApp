const db = require('../config/database')
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const secret = require('../config/config').jwtSecret
const {validationResult} = require('express-validator')

module.exports = {
    register: {
        get: function (req, res) {
            let loggedIn = req.loggedIn
            res.render('register.hbs', {
                loggedIn
            })
        }, //this gets the form
        post: function (req, res) { // this allows us to send data to the database from the form
            let body = req.body
            const errors = validationResult(req);
            if(!errors.isEmpty()){
                return res.json(errors)
            }
            //step 1 validation
            if (body.repeatPassword !== body.password) {
                res.json({
                    errors:[{
                        value:`${body.repeatPassword}`,
                        msg: `Passwords must match`,
                        param: `repeatPassword`
                    }]
                   
                })
            }
            // step 2 check if the username is already used
            User.find({
                username: body.username
            }).lean().then(user => {
                if (user.length !== 0) {
                    console.log("User already exists")
                    res.json({
                        errors:[{
                            value:`${body.username}`,
                            msg: `Username already exists`,
                            param: `username`
                        }]
                       
                    })
                   
                }
            })
            //step 3 encrypt the password and create the user
            bcrypt.genSalt(9, (err, salt) => {
                bcrypt.hash(body.password, salt, (err, hash) => {
                    let username = body.username;
                    let email = body.email;
                    let password = hash;

                    new User({
                        username,
                        password,
                        email
                    }).save().then((result) => {
                        res.redirect('/User/login')
                    })
                })
            })
        },
    },
    login: {
        get: function (req, res) {
            let loggedIn = req.loggedIn
            res.render('login.hbs', {
                loggedIn
            })
        },
        post: function (req, res) {
            let body = req.body;
            // console.log(body)
            let username = body.username
            let password = body.password
            //validation
            // find user
            User.findOne({
                    username
                }).lean()
                .then((user) => {
                    console.log(user)
                    if (user === null) {
                        return console.log("No profile found")
                    }
                    let _id = user._id;
                    let hash = user.password
                    // console.log(hash)
                    // verify the password
                    bcrypt.compare(password, hash, (err, result) => {
                        if (err) {
                            return console.log(err)
                        }

                        // console.log(result); // true
                        if (!result) {
                            return console.log("passwords do not match")
                        }
                        // set up json web token and put it into a cookie
                        const payload = {
                            _id,
                            username,

                        };
                        const options = {
                            expiresIn: '2d'
                        };
                        const token = jwt.sign(payload, secret, options);
                        console.log(token)
                        res.cookie("User", token)
                        res.redirect('/About');
                    });
                })

        }
    },
    logout: {
        get: function (req, res) {
            res.clearCookie("User")
            res.redirect('/')
        }
    }


}