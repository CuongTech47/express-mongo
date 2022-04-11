const express = require("express")
const multer = require('multer')
const router = express.Router()



const fileStorageEngine = multer.diskStorage({
    destination : (req , file , cb) => {
        cb(null ,'/public/frontend/images')
        
    },
    filename : (req , file , cb) =>{
        cb(null , file.originalname)
    }
})
const upload = multer({ storage : fileStorageEngine})
router.post("/",upload.single('image'),(req , res ) => {
    res.send('upload success')
})

module.exports = router