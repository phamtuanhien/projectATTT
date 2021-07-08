const express = require('express')
const router = express.Router()
const controller = require('../controller/account_controller')
const middleware = require('../middleware/token_middleware')

router.get('/',middleware.verifyAd,controller.getAll)

router.post('/create',middleware.verifyAd,controller.create)
router.post('/update/:id',middleware.verifyAd,controller.update)
router.post('/login',controller.authentication)
router.post('/delete/:id',middleware.verifyAd,controller.delete)
module.exports = router