const express = require('express')
const router = express.Router()
const controller = require('../controller/cutri_controller')
const middleware = require('../middleware/token_middleware')

router.get('/',middleware.verifyDH,controller.getAll)
router.get('/info/:id',middleware.verifyDH,controller.getInfo)
router.get('/infocmnd/:cmnd',middleware.verifyCT,controller.getInfoByCMND)
router.post("/update/:id",middleware.verifyDH,controller.update)
router.post("/delete/:id",middleware.verifyDH,controller.delete)
router.post('/create',middleware.verifyDH,controller.create)
module.exports = router