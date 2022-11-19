const controllers = require('../controllers/');
const express = require('express')
const router = express.Router()

router.get('/', controllers.User.get);

router.get('/:id', controllers.User.getOne);

router.post('/register', controllers.User.post.register);

router.post('/login', controllers.User.post.login);

router.post('/logout', controllers.User.post.logout);

router.put('/:id', controllers.User.put);

router.delete('/:id', controllers.User.delete);

module.exports = router;