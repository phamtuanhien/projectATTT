const Sequelize = require('sequelize')
const sequelize = require('./connection')
const Chuky = sequelize.define('chuky',{
    cmnd:{
        type : Sequelize.INTEGER,
        allowNull : false,
        primaryKey : true
    },
    bidanh:{
        type : Sequelize.STRING(255),
        allowNull : false
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
    r : {
        type : Sequelize.STRING(255),
        allowNull : false
    }
},{
    freezeTableName : true,
    timestamps : false
})
module.exports = Chuky