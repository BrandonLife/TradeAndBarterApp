const models = require('../models')

module.exports = {
    get: (req, res, next) => {
        models.Product.find()
            .then((products) => res.send(products))
            .catch(next);
    },
    specificProduct:(req,res,next) =>{
        const id = req.params.id;
        models.Product.findOne({ _id: id })
            .then((product) => res.send(product))
            .catch(next);
    },
    post: {
        createProduct: (req, res, next) => {
            const { productType, productName, imageURL, description, price } = req.body;

            models.Product.create({productType, productName, imageURL, description, price})
                .then((createdProduct) => res.send(createdProduct))
                .catch(next)
      },
            
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
        models.Product.deleteOne({ _id: id })
            .then((removedProduct) => res.send(removedProduct))
            .catch(next)
    }


}