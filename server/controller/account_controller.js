const Account = require('../model/account_model')
const {Op} = require('sequelize')
const Sequelize = require('sequelize')
const jwt = require('jsonwebtoken')


module.exports.getAll = async function(req,res){
    var accounts = await Account.findAll();
    res.json(accounts);
}

module.exports.delete = async function(req,res){
    var accountID = req.params.id;
    Account.destroy({
		where:{
			accountID : accountID
		}
	});
	res.status(200).send("OK");
}

module.exports.getInfo = async function(req,res){
    var accountID = req.params.id;
    Account.findOne({
        where : {
            accountID : accountID
        }
    })
    .then(data => {res.status(200).send(data)})
    .catch(error => {res.status(500).send(error)})
}

module.exports.create = async function(req,res){
    //console.log(req.body)
    const account = {
        username : req.body.username,
        password : req.body.password,
        role : req.body.role
    }
    console.log(account)
    Account.create(account)
    .then(data => {res.status(200).send(data)})
    .catch(err => res.status(500).send(err))
}

module.exports.update = async function(req,res){
    console.log(req.params.id)
    Account.update({
        username : req.body.username,
        password : req.body.password,
        role : req.body.role
    },{
        where:{
            accountID : req.params.id
        }
    })
    .then(data => {res.status(200).send("OK")})
    .catch(err => res.status(500).send(err))
}

module.exports.authentication = async function(req,res){
    Account.findOne({
        where : {
            username : req.body.username,
            password : req.body.password
        }
    })
    .then(data => {
        if(!data){
            return res.status(400).send("Account is not found!")
        }
        const token = jwt.sign({data},'hahaha')
        res.header('auth-token',token).send(token)
    })
    .catch(error => {
        res.status(500).json("Khong tim thay tai khoan")
    })
}

//module.exports.authorization = 