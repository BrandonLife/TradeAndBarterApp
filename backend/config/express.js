const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')
const Secret = require('./config').jwtSecret


module.exports = (app) => {
    // Set up the view engine
    app.engine('.hbs', handlebars.engine({
        extname: '.hbs'
    }))


    app.set('view engine', '.hbs');

    //set up body parser
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());


    app.use(express.static('static'));

    app.use(cookieParser())
    //set up Auth

    app.use((req, res, next) => {
        let userToken = req.cookies.User;
        console.log(userToken)
        console.log(req.loggedIn)
        if (userToken === undefined) {
            req.loggedIn = false
            req.User = {}
        } else {
            let data = jwt.verify(userToken, Secret)
            console.log(data) //good
            let expDate = new Date(data.exp * 1000);
            let date = new Date();
            console.log(date, expDate)
            if (expDate < date) {
                req.loggedIn = false
                req.User = {}
            } else {
                req.loggedIn = true
                req.User = {
                    id: data._id,
                    username: data.username
                }
            }
        }
        next();
    });


};