const Post = require('../models/Post')


module.exports = {
    posts: {
        get: function (req, res) {
            let loggedIn = req.loggedIn
            res.render('blogABCCreatePosts.hbs', {
                loggedIn
            });
        }, //this gets the form
        post: function (req, res) { // this allows us to send data to the database from the form
            let body = req.body
            let user = req.User;
            let newPost = {
                ...req.body,
                creatorId: user.id
            }
            // console.log(body, profile)
            new Post(newPost).save().then((result) => {
                console.log(result)
                res.redirect('blogABCPosts')
            })



        },
    },



}