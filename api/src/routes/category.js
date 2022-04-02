const express = require("express")

const router = express.Router()

const categoryController = require("../controllers/CategoryController")



router.get("/", categoryController.index);
router.post("/create", categoryController.create)
router.get("/:id", categoryController.show);
router.delete("/delete/:id", categoryController.delete)
router.patch("/update/:id", categoryController.update)
//router.get("/random", userController.random);
router.get("/page/:page", categoryController.pagination)

module.exports = router