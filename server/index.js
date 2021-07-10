const express = require("express");
const bodyParser = require("body-parser");
const expressBusboy = require('express-busboy')
const https = require("https");
const path = require("path");
const fs = require("fs");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

dotenv.config();
const app = express();
const Account = require('./route/account')
const Cutri = require('./route/cutri')
const Ungvien = require('./route/ungvien')
const Chuky = require('./route/chuky')
const Phieubau = require('./route/phieubau')

app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cors())
app.use('/image',express.static('image'))

app.use('/api/ungvien',Ungvien) //checked
expressBusboy.extend(app);
app.use('/api/account',Account) // checked
app.use('/api/cutri',Cutri)//checked
app.use('/api/chuky',Chuky) // checked
app.use('/api/phieubau',Phieubau)

const sslServer = https.createServer(
  {
    key: fs.readFileSync(path.join(__dirname, "cert", "key.pem")),
    cert: fs.readFileSync(path.join(__dirname, "cert", "cert.pem")),
  },
  app
);

sslServer.listen(4000, () => console.log("Secure server on port 4000"));
