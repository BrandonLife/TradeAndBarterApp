const models = require('../models')

module.exports = {
    get: (req, res, next) => {
        models.Post.find()
            .then((posts) => res.send(posts))
            .catch(next);
    },
    specificPost:(req,res,next) =>{
        const id = req.params.id;
        models.Post.findById(id)
            .then((post) => res.send(post))
            .catch(next);
    },
    post: (req, res, next) => {
        const { description } = req.body;
        const { _id } = req.user;

        models.Post.create({ description, creatorId: _id })
            .then((newPost) => {
                return Promise.all([
                    models.User.updateOne({ _id }, { $push: { posts: newPost } }),
                    models.Post.findOne({ _id: newPost._id })
                ]);
            })
            .then(([modifiedObj, PostObj]) => {
                console.log(PostObj)
                res.send(PostObj);
            })
            .catch(next);
    },

    put: (req, res, next) => {
        const id = req.params.id;
        const { description } = req.body;
        models.Post.updateOne({ _id: id }, { description })
            .then((updatedPost) => res.send(updatedPost))
            .catch(next)
    },

    delete: (req, res, next) => {
        const id = req.params.id;
        models.Post.deleteOne({ _id: id })
            .then((removedPost) => res.send(removedPost))
            .catch(next)
    }


}