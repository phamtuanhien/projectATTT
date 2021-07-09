const jwt = require("jsonwebtoken");

module.exports.verifyCT = function(req, res, next) {
  /*
  const token = req.headers.token;
  try {
    const verified = jwt.verify(token, 'hahaha');
    if(verified.data.role == "CT") next()
    else res.status(400).send("You must login with 'Cu Tri' role!")
  } 
    catch(err) { return res.status(400).send("Error"); }
    */
   next()
}

module.exports.verifyDH = function(req, res, next) {
  /*
  const token = req.headers.token;
  //console.log(req.body)
  try {
    const verified = jwt.verify(token, 'hahaha');
    if(verified.data.role == "DH") next()
    else res.status(400).send("You must login with 'Ban Dieu Hanh' role!")
  } 
    catch(err) { return res.status(400).send("Error"); }
  */
 next()
}

module.exports.verifyKT = function(req, res, next) {
  /*
  const token = req.headers.token;
  try {
    const verified = jwt.verify(token, 'hahaha');
    if(verified.data.role == "KT") next()
    else res.status(400).send("You must login with 'Ban Kiem Tra' role!")
  } 
    catch(err) { return res.status(400).send("Error"); }
    */
   next()
}

module.exports.verifyDK = function(req, res, next) {
  /*
  const token = req.headers.token;
  try {
    const verified = jwt.verify(token, 'hahaha');
    if(verified.data.role == "DK") next()
    else res.status(400).send("You must login with 'Ban Dang Ky' role!")
  } 
    catch(err) { return res.status(400).send("Error"); }
    */
   next()
}

module.exports.verifyAd = function(req, res, next) {
  /*
  const token = req.headers.token;
  try {
    const verified = jwt.verify(token, 'hahaha');
    if(verified.data.role == "Ad") next()
    else res.status(400).send("You must login with 'Admin' role!")
  } 
    catch(err) { return res.status(400).send("Error"); }
    */
   next()
}