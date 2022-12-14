const config = require('../config/config');
const models = require('../models')
const Utilities = require('../Utilities')

module.exports = {
    get: (req, res, next) => {
        models.Post.find()
            .then((posts) =>{
            return res.send(posts)})
            .catch(next);
    },
    specificPost:(req,res,next) =>{
        const id = req.params.id;
        models.Post.findOne({ _id: id })
            .then((post) => res.send(post))
            .catch(next);
    },
    post: {
        createPost: (req, res, next) => {
            const { name, title, imageURL, comments } = req.body;

            models.Post.create({ name, title, imageURL, comments})
                .then((createdPost) => res.send(createdPost))
                .catch(next)
      },
      
    },

    put: (req, res, next) => {
        const id = req.params.id;
        const { name, title, imageURL, comments } = req.body
        console.log(req, 'req object for Posts')
        models.Post.updateOne({ _id: id, title:title, name:name, imageURL:imageURL, comments: comments })
            .then((updatedPost) => res.send(updatedPost))
            .catch(next)
    },

    delete: (req, res, next) => {
        let id = req.params.id;
        console.log(req)
        models.Post.deleteOne({ _id: id})
            .then((removedPost) => res.send(removedPost))
            .catch(next)
    }


}