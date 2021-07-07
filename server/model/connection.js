const {Sequelize} = require('sequelize')
const db = require('../config/db.config')
const sequelize = new Sequelize({
    database : db.DB,
    username : db.USER,
    host : db.HOST,
    password : db.PASSWORD,
    dialect : 'mysql'
})
module.exports = sequelize