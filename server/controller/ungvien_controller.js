const Ungvien = require('../model/ungvien_model')
const {Op} = require('sequelize')
const Sequelize = require('sequelize')

module.exports.getAll = async function(req,res){
    var dsungvien = await Ungvien.findAll();
    res.json(dsungvien);
}

module.exports.delete = async function(req,res){
    var ungvienID = req.params.id;
    Ungvien.destroy({
		where:{
			ungvienID : ungvienID
		}
	})
	.then(data => res.status(200).send("OK"))
    .catch(err => res.status(400).send("Error"))
}

module.exports.getInfo = async function(req,res){
    var ungvienID = req.params.id;
    Ungvien.findOne({
        where : {
            ungvienID : ungvienID
        }
    })
    .then(data => {res.status(200).send(data)})
    .catch(error => {res.status(500).send(error)})
}


module.exports.create = async function(req,res){
    console.log(req.body.hoten)
    var item = req.file
    let img =  `https://localhost:3000/${item.path.split("/").slice(1).join("/")}`

    const ungvien = {
        hoten : req.body.hoten,
        cmnd : req.body.cmnd,
        ngaysinh : req.body.ngaysinh,
        sdt : req.body.sdt,
        chucvu : req.body.chucvu,
        noilamviec : req.body.noilamviec,
        gioitinh : req.body.gioitinh,
        diachi : req.body.diachi,
        anh : img
    }
    console.log(ungvien)
    Ungvien.create(ungvien)
    .then(data => {res.status(200).send(data)})
    .catch(err => res.status(500).send(err))
}

module.exports.update = async function(req,res){
    console.log(req.params.id)
    let img = await Ungvien.findOne({
        attributes : ['anh'],
        where : {
            ungvienID : req.params.id
        }
    })
    img = img.getDataValue('anh')
    var item = req.file
    if(item){
        img = `https://localhost:3000/${item.path.split("/").slice(1).join("/")}`
    }
    Ungvien.update({
        hoten : req.body.hoten,
        //cmnd : req.body.cmnd,
        ngaysinh : req.body.ngaysinh,
        //sdt : req.body.sdt,
        chucvu : req.body.chucvu,
        noilamviec : req.body.noilamviec,
        gioitinh : req.body.gioitinh,
        diachi : req.body.diachi,
        anh : img
    },{
        where:{
            ungvienID : req.params.id
        }
    })
    .then(data => {res.status(200).send(data)})
    .catch(err => res.status(500).send(err))
}