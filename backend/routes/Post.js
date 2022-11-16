const controllers = require('../controllers/');
const express = require('express')
const router = express.Router()
const { authentication } = require('../Utilities');

router.get('/', controllers.Post.get);

router.get('/:id', controllers.Post.specificPost);

router.post('/', authentication(), controllers.Post.post);
//now we need to add to a specific post

router.put('/:id', authentication(), controllers.Post.put);

router.delete('/:id', authentication(), controllers.Post.delete);

module.exports = router;