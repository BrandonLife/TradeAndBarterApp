const config = require('./config/config');
const dbConnection = require('./config/database');

const app = require('express')();

dbConnection().then(() => {

    require('./config/express')(app);

    require('./config/routes')(app);

    app.use(function (err, req, res, next) {
        res.status(500).send(err.message);
        console.log('*'.repeat(90))
    });

    app.listen(config.port, console.log(`Server is running. Listening on port ${config.port}!`))

}).catch(console.error);