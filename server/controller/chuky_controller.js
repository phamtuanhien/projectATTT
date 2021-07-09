const Chuky = require('../model/chuky_model')
const {Op} = require('sequelize')
const Sequelize = require('sequelize')
const {BigInteger} = require('jsbn')
const NodeRSA = require('node-rsa')
const BlindSignature = require('blind-signatures/rsablind2')

// key
const fixed_key = require('../keyDK_KT.json')
const { response } = require('express')
const key = new NodeRSA()
key.importKey({
    n: Buffer.from(fixed_key.n,'hex'),
    e: parseInt(new BigInteger(fixed_key.e,16).toString()),
    d: Buffer.from(fixed_key.d,'hex'),
    p: Buffer.from(fixed_key.p,'hex'),
    q: Buffer.from(fixed_key.q,'hex'),
    dmp1: Buffer.from(fixed_key.dmp1,'hex'),
    dmq1: Buffer.from(fixed_key.dmq1,'hex'),
    coeff: Buffer.from(fixed_key.coeff,'hex'),
},'components')

// lấy thông tin chữ ký hiển thị trên trang cử tri
module.exports.getInfo = async function(req,res){
    var cmnd = req.params.cmnd;
    Chuky.findOne(
        {
            attributes : ['cmnd','dinhdanh','chuky','tinhtrang'],
            where : {
                cmnd : cmnd
            }
        }
    )
    .then(data => {res.status(200).send(data)})
    .catch(error => {res.status(500).send(error)})
}

// tạo bí danh
module.exports.getBiDanh = async function(req,res){
    const dinhdanh = req.body.dinhdanh
    const {blinded,r} = BlindSignature.blind({
        message : dinhdanh,
        key : key
    })
    res.status(200).send({
        blinded : blinded.toString(),
        r : r.toString()
    })
}

// cử tri xin cấp chữ ký
module.exports.dangky = async function(req,res){
    var check = await Chuky.findOne({
        attributes : ['tinhtrang'],
        where : {
            cmnd : req.body.cmnd
        }
    })
    if(!check){ // chỉ cấp 1 lần
        const chuky = {
            cmnd : req.body.cmnd,
            dinhdanh : req.body.dinhdanh,
            bidanh : req.body.bidanh,
            r : req.body.r,
            tinhtrang : 'waiting'
        }
        console.log(chuky)
        Chuky.create(chuky)
            .then(data => {res.status(200).send("OK")})
            .catch(err => res.status(500).send(err))
    }
    else{
        return res.status(500).send("Bạn đã xin cấp chữ ký trước đó !!")
    }
}

// ban đăng ký ký trên bí danh và gửi chữ ký trên định danh cho cử tri
module.exports.ky = async function(req,res){
    const bidanh = req.body.bidanh
    const cmnd = req.body.cmnd
    var r = await Chuky.findOne({
        attributes : ['r'],
        where : {
            cmnd : cmnd
        }
    })
    r = r.getDataValue('r')
    const chuky_bidanh = BlindSignature.sign({
        blinded : bidanh,
        key : key
    })
    const chuky_dinhdanh = BlindSignature.unblind({
        signed : chuky_bidanh,
        key : key,
        r : new BigInteger(r)
    }).toString()
    Chuky.update({
        tinhtrang : "done",
        chuky : chuky_dinhdanh
    },
    {
        where : {
            cmnd : cmnd
        }
    }).then(data => res.status(200).send("OK"))
    .catch(err => res.status(500).send(err))
}

//verify định danh, chữ ký
module.exports.kiemtra = async function(req,res){
    const unblinded = req.body.chuky
    const dinhdanh = req.body.dinhdanh
    const result = BlindSignature.verify2({
        unblinded : unblinded,
        key : key,
        message : dinhdanh
    })
    if(result) res.status(200).send("True")
    else res.status(200).send("False")
}

// danh sách đăng ký chờ ký hiển thị cho ban đăng ký
module.exports.dschoky = async function(req,res){
    const ds = await Chuky.findAll({
        attributes : ['bidanh','cmnd'],
        where : {
            tinhtrang : 'waiting'
        }
    })
    .then(data => {res.status(200).send(data)})
    .catch(err => {res.status(500).send(err)})
}

/*
console.log(BlindSignature.verify2({
    unblinded : '456477225747887824399025770125294023211594939228775625611269664317314663346264913421738623376884661703374359582744677651241864766334983333731410136344482',
    key : key,
    message : "Vu Hoang Phuc"
}))
*/