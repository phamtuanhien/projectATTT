const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer')
const https = require('https')
const path = require('path')
const fs = require('fs')
const cors = require('cors')

const app = express()

const Account = require('./route/account')

var upload = new multer();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'))

app.use(cors())
/*
app.use('/',(req,res,next)=>{
    res.send('Hello Phuc!')
})*/
app.use('/account',Account)

const sslServer = https.createServer({
    key : fs.readFileSync(path.join(__dirname,'cert','key.pem')),
    cert : fs.readFileSync(path.join(__dirname,'cert','cert.pem')),
},app)

sslServer.listen(3000,()=> console.log("Secure server on port 3000"))