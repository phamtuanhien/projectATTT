const express = require('express')
const router = express.Router()
const controller = require('../controller/ungvien_controller')
const middleware = require('../middleware/token_middleware')
const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination : '../image/',
    filename: function(req, file, callback) {
        var fname = Date.now() + path.extname(file.originalname);
        callback(null, fname);
    }
})
const upload = multer({
    storage : storage
})

router.get('/',controller.getAll)
router.get('/info/:id',controller.getInfo)

router.post("/update/:id",upload.single("anh"),middleware.verifyDH,controller.update)
router.post("/delete/:id",middleware.verifyDH,controller.delete)
router.post('/create',upload.single("anh"),middleware.verifyDH,controller.create)
module.exports = router