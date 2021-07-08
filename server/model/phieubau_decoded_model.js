const Sequelize = require('sequelize')
const sequelize = require('./connection')
const PhieubauDecode = sequelize.define('phieubau_decoded',{
    cutriID:{
        type : Sequelize.INTEGER,
        allowNull : false,
        primaryKey : true
    },
    chuky:{
        type : Sequelize.STRING(255),
        allowNull : true
    },
    unvienID:{
        type: Sequelize.INTEGER,
        allowNull : false
    },
    dinhdanh :{
        type : Sequelize.STRING(255),
        allowNull : false
    }
},{
    freezeTableName : true,
    timestamps : false
})
module.exports = PhieubauDecode