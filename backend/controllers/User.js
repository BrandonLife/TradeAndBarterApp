const models = require('../models');
const config = require('../config/config');
const Utilities = require('../Utilities');

module.exports = {
  get: (req, res, next)=>{
    models.User.find().then((users)=>res.send(users))
    .catch(next)
  },
  getOne : (req, res, next)=>{
    const id = req.params.id;
    models.User.findById(id).then((users)=>res.send(users))
    .catch(next)
  },
  post: {
    register: (req, res, next) => {
        const { username, password, email } = req.body;
        models.User.create({ username, password, email })
            .then((createdUser) => res.send(createdUser))
            .catch(next)
  },
    login: (req, res, next) => {
    const { username, password } = req.body;
    models.User.findOne({ username})
        .then((user) => Promise.all([user, user.matchPassword(password)]))
        .then(([user, match]) => {
            if (!match) { 
                res.status(401).send('Incorrect Password');
                return;
            }
            //if the password does match
            const token = Utilities.jsonWebToken.createToken({ id: user._id });
            res.cookie(config.authCookieName, token).send({user, token, cookieName:config.authCookieName});
        })
        .catch(next);
},
logout: (req, res, next) => {
    const token = req.cookies[config.authCookieName];
    models.InactiveTokens.create({ token })
        .then(() => {
            res.clearCookie(config.authCookieName).send('Logged out');
        })
        .catch(next);
},


},// end of post method
put: (req, res, next) => {
    const id = req.params.id;
    const { username, password } = req.body;
    models.User.findByIdAndUpdate({ _id: id }, { username, password })// going to create problems
        .then((updatedUser) => res.send(updatedUser))
        .catch(next)
},

delete: (req, res, next) => {
    const id = req.params.id;
    models.User.deleteOne({ _id: id })// need to find correct method
        .then((removedUser) => res.send(removedUser))
        .catch(next)
}
}
