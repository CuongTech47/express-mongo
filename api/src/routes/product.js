const express = require("express")
const multer = require('multer')
const router = express.Router()

const productController = require("../controllers/api/ProductController")
//define storage for the images

const storage = multer.diskStorage({
    //destination for files
    destination: function (req, file, callback) {
      callback(null, 'public/frontend/images/home/');
    },
  
    //add back the extension
    filename: function (req, file, callback) {
      let fileOriginalName = file.originalname
      let fileStr = fileOriginalName.replace(/\s/g, '')

      callback(null, Date.now() + fileStr);
    },
  });
  
  //upload parameters for multer
  const upload = multer({
    storage: storage,
    limits: {
      fieldSize: 1024 * 1024 * 3,
    },
    
  });
// ADD PRODUCT
router.post("/",upload.single('product_image'),productController.addProduct)

// GET ALL PRODUCTS
router.get("/", productController.getAllProducts);

// GET AN PRODUCT
router.get("/:id", productController.getAnProduct);

//UPDATE AN PRODUCT
router.put("/:id",upload.single('product_image'), productController.updateProduct)

//DELETE PRODUCT
router.delete("/:id", productController.deleteProduct)

//router.get("/random", userController.random);
// router.get("/page/:page", categoryController.pagination)

module.exports = router