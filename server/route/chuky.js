const express = require('express')
const router = express.Router()
const controller = require('../controller/chuky_controller')
const middleware = require('../middleware/token_middleware')

//router.get('/',middleware.verifyDH,controller.getAll)
//router.get('/info/:id',middleware.verifyDH,controller.getInfo)
router.get('/info',middleware.verifyCT,controller.getInfo)

router.post("/bidanh",middleware.verifyCT,controller.getBiDanh)
router.post("/ky",middleware.verifyDK,controller.ky)
router.post("/dangky",middleware.verifyCT,controller.dangky)
router.post("/kiemtra",controller.kiemtra)
module.exports = router