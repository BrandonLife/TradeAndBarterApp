const routes = require('../routes/index')
module.exports = (app)=>{

    app.use('/api/User', routes.User);

    app.use('/api/Post', routes.Post);
    app.use('/api/Products', routes.Products);

    app.use('/*', (req, res, next) => res.send('<h1> Oops. Looks like you are in the wrong place. Try again.</h1>'))


}