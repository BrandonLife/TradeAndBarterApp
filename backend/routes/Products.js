const controllers = require('../controllers/');
const express = require('express')
const router = express.Router()
const { authentication } = require('../Utilities');

router.get('/', controllers.Product.get);

router.get('/specificProduct/:id', controllers.Product.specificProduct);

router.post('/createProduct', controllers.Product.post.createProduct);

router.put('/:id', controllers.Product.put);

router.delete('/:id', controllers.Product.delete);

module.exports = router;