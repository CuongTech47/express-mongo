const express = require("express");

const router = express.Router();

const brandController = require("../controllers/BrandController");

router.get("/", brandController.index);
router.post("/create", brandController.create)
router.get("/:id", brandController.show);
router.delete("/delete/:id", brandController.delete)
router.patch("/update/:id", brandController.update)
//router.get("/random", userController.random);

module.exports = router;