const express = require('express')
const router = express.Router()
const controller = require('../controller/chuky_controller')
const middleware = require('../middleware/token_middleware')

router.get('/info/:cmnd',middleware.verifyCT,controller.getInfo)
router.get('/',middleware.verifyDK,controller.dschoky)

router.post("/bidanh",middleware.verifyCT,controller.getBiDanh)
router.post("/ky",middleware.verifyDK,controller.ky)
router.post("/dangky",middleware.verifyCT,controller.dangky)
router.post("/kiemtra",controller.kiemtra)
module.exports = router