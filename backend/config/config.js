module.exports = {
    development: {
        port: process.env.Port || 9999
    },
    dbURL: 'mongodb://localhost:27017/TradeAndBarter',
    production: {},
    jwtSecret: "password"
}