const controllers = require('../controllers/');
const express = require('express')
const router = express.Router()
const { authentication } = require('../Utilities');

router.get('/', controllers.Product.get);

router.get('/:id', controllers.Product.specificProduct);

router.post('/', authentication(), controllers.Product.post);

router.put('/:id', authentication(), controllers.Product.put);

router.delete('/:id', authentication(), controllers.Product.delete);

module.exports = router;