const Sequelize = require('sequelize')
const sequelize = require('./connection')
const PhieubauEncode = sequelize.define('PhieubauEncode',{
    cutriID:{
        type : Sequelize.INTEGER,
        allowNull : false,
        primaryKey : true
    },
    chuky:{
        type : Sequelize.STRING(255),
        allowNull : true
    },
    tinhtrang:{
        type: Sequelize.STRING(45),
        allowNull : false
    },
    dinhdanh :{
        type : Sequelize.STRING(255),
        allowNull : false
    },
    content : {
        type : Sequelize.STRING(255),
        allowNull : false
    }
},{
    freezeTableName : true,
    timestamps : false
})
module.exports = PhieubauEncode