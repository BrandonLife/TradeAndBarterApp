const routes = require('../routes/index')
module.exports = (app)=>{

    app.use('/api/user', routes.user);

    app.use('/api/Post', routes.Post);
    app.use('/api/Products', routes.Products);

    app.use('*', (req, res, next) => res.send('<h1> Oops. Looks like you are in the wrong place. Try again.</h1>'))


}