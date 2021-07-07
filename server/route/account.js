const express = require('express')
const router = express.Router()
const controller = require('../controller/account_controller')

router.get('/',controller.getAll)
router.post('/delete/:id',controller.delete)
router.post('/create',controller.create)
router.post('/update/:id',controller.update)

module.exports = router