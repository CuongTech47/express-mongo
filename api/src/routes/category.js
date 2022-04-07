const express = require("express")

const router = express.Router()

const categoryController = require("../controllers/api/CategoryController")

// ADD CATEGORY
router.post("/", categoryController.addCategory)

// GET ALL CATEGORIES
router.get("/", categoryController.getAllCategories);

// GET AN CATEGORY
router.get("/:id", categoryController.getAnCategory);

//UPDATE AN CATEGORY
router.put("/:id", categoryController.updateCategory)

//DELETE CATEGORY 
router.delete("/:id", categoryController.deleteCategory)

//router.get("/random", userController.random);
// router.get("/page/:page", categoryController.pagination)




module.exports = router