
const multer = require('multer')

const testUploadController = {
    index : async(req , res) =>{
        const fileStorageEngine = multer.diskStorage({
            destination : (req , file , cb) => {
                cb(null ,'../../../../public/frontend/images')
                
            },
            filename : (req , file , cb) =>{
                cb(null ,Date.now() + '--' + file.originalname)
            }
        })

        const upload = multer({ storage : fileStorageEngine})
        res.send()
    }

}

module.exports = testUploadController