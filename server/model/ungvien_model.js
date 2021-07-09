const Sequelize = require('sequelize')
const sequelize = require('./connection')
const Ungvien = sequelize.define('ungvien',{
    ungvienID:{
        type : Sequelize.INTEGER,
        allowNull : false,
        autoIncrement : true,
        primaryKey : true
    },
    hoten:{
        type : Sequelize.STRING(45),
        allowNull : false
    },
    cmnd:{
        type : Sequelize.INTEGER,
        allowNull : false,
        unique : true
    },
    ngaysinh:{
        type: Sequelize.DATE,
        allowNull : false
    },
    sdt :{
        type : Sequelize.INTEGER,
        allowNull : false,
        unique : true
    },
    chucvu : {
        type : Sequelize.STRING(45),
        allowNull : false
    },
    noilamviec : {
        type : Sequelize.STRING(255),
        allowNull : false
    },
    gioitinh : {
        type : Sequelize.STRING(5),
        allowNull : false
    },
    diachi : {
        type : Sequelize.STRING(255),
        allowNull : false
    },
    anh : {
        type : Sequelize.STRING(255),
        allowNull : false
    }
},{
    freezeTableName : true,
    timestamps : false
})
module.exports = Ungvien