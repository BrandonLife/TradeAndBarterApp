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
        const { productType, productName, imageURL, description, price } = req.body;
        console.log(req, 'req obj for Products')
        console.log(res, 'res obj products')
        models.Product.updateOne({ _id: id, productType: productType, productName: productName, imageURL: imageURL, description: description, price: price })
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