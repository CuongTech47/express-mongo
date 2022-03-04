const express = require("express");

const router = express.Router();

const productController = require("../controllers/CategoryController");



router.get("/", productController.index);
router.post("/create", productController.create)
router.get("/:id", productController.show);
router.delete("/delete/:id", productController.delete)
router.patch("/update/:id", productController.update)
//router.get("/random", userController.random);

module.exports = router;