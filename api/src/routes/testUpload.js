const express = require("express")
const multer = require('multer')
const router = express.Router()



const fileStorageEngine = multer.diskStorage({
    destination : (req , file , cb) => {
        cb(null ,'public/frontend/images/home/')
        
    },
    filename : (req , file , cb) =>{
        cb(null , Date.now() + file.originalname)
    }
})
const upload = multer({ 
    storage : fileStorageEngine ,
    limits : {
        fieldSize: 1024 * 1024 * 3
    },
    fileFilter(req , file, cb) {
        if (!file.originalname.match(/\.(png|jpg)$/)) { 
            // upload only png and jpg format
            return cb(new Error('Please upload a Image'))
        }
        cb(undefined, true)
    }
})
router.post("/",upload.single('image'),(req , res ) => {
    const file = req.file
    if (!file) {
    const error = new Error('Please upload a file')
    error.httpStatusCode = 400
    return next(error)
  }
    res.send(file)
})

module.exports = router