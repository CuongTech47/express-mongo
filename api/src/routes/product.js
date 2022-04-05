const express = require("express")

const router = express.Router()

const productController = require("../controllers/api/ProductController")

// ADD PRODUCT
router.post("/", productController.addProduct)

// GET ALL PRODUCTS
router.get("/", productController.getAllProducts);

// GET AN PRODUCT
router.get("/:id", productController.getAnProduct);

//UPDATE AN PRODUCT
router.put("/:id", productController.updateProduct)

//DELETE PRODUCT
router.delete("/:id", productController.deleteProduct)

//router.get("/random", userController.random);
// router.get("/page/:page", categoryController.pagination)

module.exports = router