const Sequelize = require('sequelize')
const sequelize = require('./connection')
const Account = sequelize.define('account',{
    accountID:{
        type : Sequelize.INTEGER,
        allowNull : false,
        autoIncrement : true,
        primaryKey : true
    },
    username:{
        type : Sequelize.STRING(25),
        allowNull : false
    },
    password:{
        type : Sequelize.STRING(25),
        allowNull : false
    },
    role : {
        type : Sequelize.STRING(45),
        allowNull : false
    }
},{
    freezeTableName : true,
    timestamps : false
})
module.exports = Account