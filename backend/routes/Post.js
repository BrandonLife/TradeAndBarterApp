const controllers = require('../controllers/');
const express = require('express')
const router = express.Router()
const { authentication } = require('../Utilities');

router.get('/', controllers.Post.get);

router.post('/specificPost/:id', controllers.Post.specificPost);

router.post('/createPost', controllers.Post.post.createPost);
//now we need to add to a specific post

router.put('/:id', controllers.Post.put);

router.delete('/:id', controllers.Post.delete);

module.exports = router;