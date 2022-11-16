const models = require('../models')

module.exports = {
    get: (req, res, next) => {
        models.Product.find()
            .then((products) => res.send(products))
            .catch(next);
    },
    specificProduct:(req,res,next) =>{
        const id = req.params.id;
        models.Product.findById(id)
            .then((product) => res.send(product))
            .catch(next);
    },
    post: (req, res, next) => {
        console.log(req.body)
        const { description } = req.body;
        const { _id } = req.user;

        models.Post.create({ description, creatorId: _id })
            .then((newProduct) => {
                return Promise.all([
                    models.User.updateOne({ _id }, { $push: { products: newProduct } }),
                    models.Product.findOne({ _id: newProduct._id })
                ]);
            })
            .then(([modifiedObj, ProductObj]) => {
                res.send(ProductObj);
            })
            .catch(next);
    },

    put: (req, res, next) => {
        const id = req.params.id;
        const { description } = req.body;
        models.Product.updateOne({ _id: id }, { description })
            .then((updatedProduct) => res.send(updatedProduct))
            .catch(next)
    },

    delete: (req, res, next) => {
        const id = req.params.id;
        models.Post.deleteOne({ _id: id })
            .then((removedProduct) => res.send(removedProduct))
            .catch(next)
    }


}