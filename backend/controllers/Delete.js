const Post = require('../models/Post')
module.exports = {

    get: function (req, res) {
        let postId = req.params.id
        let loggedIn = req.loggedIn
        Post.findById(postId).lean().then(post => {
            let context = {
                loggedIn,
                ...post
            }
            res.render('deletePost.hbs', context)
        });
    }, //this gets the form
    post: function (req, res) { // this allows us to send data to the database from the form
        let postId = req.params.id;
        Post.findByIdAndRemove(postId).
        then(result => {
            console.log(result)
            res.redirect(`/Forum`)
        })


    },

}