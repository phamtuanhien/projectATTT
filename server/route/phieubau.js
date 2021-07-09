const express = require('express')
const router = express.Router()
const controller = require('../controller/phieubau_controller')
const middleware = require('../middleware/token_middleware')

router.get('/info/:cmnd',middleware.verifyCT,controller.getInfo)
router.get('/',middleware.verifyKT,controller.dsphieubau)
router.get('/thongke',controller.thongke)
router.post("/bophieu",middleware.verifyCT,controller.bophieu)
router.post("/themvaohom",middleware.verifyKT,controller.themvaohomphieu)
module.exports = router