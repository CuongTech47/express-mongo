const express = require("express")

const router = express.Router()

const brandController = require("../controllers/api/BrandController")

// ADD BRAND
router.post("/", brandController.addBrand)

// GET ALL BRANDS
router.get("/", brandController.getAllBrands);

// GET AN BRAND
router.get("/:id", brandController.getAnBrand);

//UPDATE AN BRAND
router.put("/:id", brandController.updateBrand)

//DELETE BRAND
router.delete("/:id", brandController.deleteBrand)

//router.get("/random", userController.random);
// router.get("/page/:page", categoryController.pagination)

module.exports = router