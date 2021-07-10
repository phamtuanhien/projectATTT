const Phieubau_encode = require('../model/phieubau_encoded_model')
const Phieubau_decode = require('../model/phieubau_decoded_model')
const {BigInteger} = require('jsbn')
const NodeRSA = require('node-rsa')
const Ungvien = require("../model/ungvien_model")
const Sequelize = require('sequelize')
const fixed_key = require("../keyTK.json")
const sequelize = require('../model/connection')

var key = new NodeRSA()
key.importKey({
    n: Buffer.from(fixed_key.n,'hex'),
    e: parseInt(fixed_key.e),
    d: Buffer.from(fixed_key.d,'hex'),
    p: Buffer.from(fixed_key.p,'hex'),
    q: Buffer.from(fixed_key.q,'hex'),
    dmp1: Buffer.from(fixed_key.dmp1,'hex'),
    dmq1: Buffer.from(fixed_key.dmq1,'hex'),
    coeff: Buffer.from(fixed_key.coeff,'hex'),
},'components')

// lấy thông tin chữ ký hiển thị trên trang cử tri
module.exports.getInfo = async function(req,res){
    var cmnd = req.params.cmnd
    var phieubau = await Phieubau_encode.findOne(
        {
            attributes : ['cmnd','chuky','dinhdanh','tinhtrang'],
            where : {
                cmnd : cmnd
            }
        }
    )
    if (!phieubau){
        phieubau = await Phieubau_decode.findOne(
            {
                attributes : ['cmnd','chuky','dinhdanh','tinhtrang','ungvienID'],
                where : {
                    cmnd : cmnd
                }
            }
        )
    }
    return res.status(200).send(phieubau)
}


// cử tri bỏ phiếu
module.exports.bophieu = async function(req,res){
    var check = await Phieubau_encode.findOne({
        where : {
            cmnd : req.body.cmnd
        }
    })
    if(check) return res.status(500).send("Đã bỏ phiếu và đang chờ kiểm tra!")
    check = await Phieubau_decode.findOne({
        where : {
            cmnd : req.body.cmnd
        }
    })
    if(check) return res.status(500).send("Đã trong hòm phiếu")
    const phieubau = {
        cmnd : req.body.cmnd,
        chuky : req.body.cmnd,
        dinhdanh : req.body.dinhdanh,
        tinhtrang : 'waiting',
        content : key.encrypt(req.body.ungvienID,'base64')
    }
    Phieubau_encode.create(phieubau)
        .then(data => {res.status(200).send("OK")})
        .catch(err => res.status(500).send(err))
}

// hiển thị danh sách phiều bầu cần kiểm tra cho ban kiểm tra
module.exports.dsphieubau = async function(req,res){
    Phieubau_encode.findAll()
    .then(data => res.status(200).send(data))
    .catch(err => res.status(500).send(err))
}

//thêm phiếu vào hòm
module.exports.themvaohomphieu = async function(req,res){
    const phieubau = {
        cmnd : req.body.cmnd,
        chuky : req.body.chuky,
        dinhdanh : req.body.dinhdanh,
        tinhtrang : "done",
        ungvienID : key.decrypt(req.body.content,'utf8')
    }
    Phieubau_decode.create(phieubau)
    .then(data => {res.status(200).send("OK")})
    .catch(err => {res.status(500).send(err)})
}

module.exports.thongke = async function(req,res){
    const [results,metadata] = await sequelize.query("SELECT ungvienID,count(ungvienID) as 'Sum' FROM phieubau_decoded GROUP BY ungvienID")
    res.status(200).send(metadata)
}

