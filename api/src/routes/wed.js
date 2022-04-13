const express = require("express")

const router = express.Router()

const categoryController = require('../controllers/www/CategoryController')

const brandController = require('../controllers/www/BrandController')

const homeController = require('../controllers/www/HomeController')

const productController = require('../controllers/www/ProductController')

//home




router.get('/',homeController.index)


//danh muc san pham trang chu
router.get('/danh-muc-san-pham/:id',categoryController.showCategoryHome)
router.get('/thuong-hieu-san-pham/:id',brandController.showBrandHome)

router.get('/chi-tiet-san-pham/:id',productController.detailsProduct)




//Category



module.exports = router