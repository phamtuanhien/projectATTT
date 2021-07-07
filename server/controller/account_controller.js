const Account = require('../model/account_model')
const {Op} = require('sequelize')
const Sequelize = require('sequelize')

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

module.exports.create = async function(req,res){
    const account = {
        username : req.body.username,
        password : req.body.password
    }
    Account.create(account)
    .then(data => {res.status(200).send(data)})
    .catch(err => res.status(500).send(err))
}

module.exports.update = async function(req,res){
    Account.update({
        username : req.body.username,
        password : req.body.password
    },{
        where:{
            accountID : req.params.id
        }
    })
    .then(data => {res.status(200).send(data)})
    .catch(err => res.status(500).send(err))
}