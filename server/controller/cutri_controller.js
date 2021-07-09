const Cutri = require('../model/cutri_model')
const {Op} = require('sequelize')
const Sequelize = require('sequelize')
const Account = require('../model/account_model')

module.exports.getAll = async function(req,res){
    var dscutri = await Cutri.findAll();
    res.json(dscutri);
}

module.exports.delete = async function(req,res){
    var cutriID = req.params.id;
    Cutri.destroy({
		where:{
			cutriID : cutriID
		}
	})
	.then(data => res.status(200).send("OK"))
    .catch(err => res.status(400).send("Error"))
}

module.exports.getInfo = async function(req,res){
    var cutriID = req.params.id;
    Cutri.findOne({
        where : {
            cutriID : cutriID
        }
    })
    .then(data => {res.status(200).send(data)})
    .catch(error => {res.status(500).send(error)})
}

module.exports.getInfoByCMND = async function(req,res){
    var cmnd = req.body.cmnd;
    Cutri.findOne({
        where : {
            cmnd : cmnd
        }
    })
    .then(data => {res.status(200).send(data)})
    .catch(error => {res.status(500).send(error)})
}

module.exports.create = async function(req,res){
    //console.log(req.body.hoten)
    const cutri = {
        hoten : req.body.hoten,
        cmnd : req.body.cmnd,
        ngaysinh : req.body.ngaysinh,
        sdt : req.body.sdt,
        chucvu : req.body.chucvu,
        noilamviec : req.body.noilamviec,
        gioitinh : req.body.gioitinh,
        diachi : req.body.diachi
    }
    const account = {
        username : req.body.cmnd,
        password : req.body.sdt,
        role : 'CT'
    }
    console.log(cutri)
    Account.create(account)
    Cutri.create(cutri)
    .then(data => {res.status(200).send(data)})
    .catch(err => res.status(500).send(err))
}

module.exports.update = async function(req,res){
    console.log(req.params.id)
    Cutri.update({
        hoten : req.body.hoten,
        //cmnd : req.body.cmnd,
        ngaysinh : req.body.ngaysinh,
        //sdt : req.body.sdt,
        chucvu : req.body.chucvu,
        noilamviec : req.body.noilamviec,
        gioitinh : req.body.gioitinh,
        diachi : req.body.diachi
    },{
        where:{
            cutriID : req.params.id
        }
    })
    .then(data => {res.status(200).send(data)})
    .catch(err => res.status(500).send(err))
}