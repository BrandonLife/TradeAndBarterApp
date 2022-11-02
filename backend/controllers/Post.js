const db = require('../config/database')
const Post = require('../models/Post')

module.exports = {

    posts: {
        get: function (req, res) {
            console.log(req.loggedIn, req.User)
            Post.find({}).lean().then((allPosts) => {
                let context = {
                    posts: allPosts,
                    loggedIn: req.loggedIn
                }
                res.render("/Forum", context)

            })
        }, //this will load the posts onto the page
        post: function (req, res) { // this allows us to send data to the database from the form
            let body = req.body
            db.then(() => {
                new Post(body).save().then((result) => {

                    res.redirect('/')
                })
            })


        },
    },

}