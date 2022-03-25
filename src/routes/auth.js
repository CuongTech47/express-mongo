const express = require("express");
const {requiresAuth} = require('express-openid-connect')
const router = express.Router();

const authController = require("../controllers/AuthController");

router.get("/", authController.index);
router.get("/profile", requiresAuth(), (req , res) =>{
    res.send(JSON.stringify(req.oidc.user))
    
})
/* router.post("/create", brandController.create)
router.get("/:id", brandController.show);
router.delete("/delete/:id", brandController.delete)
router.patch("/update/:id", brandController.update) */
//router.get("/random", userController.random);

module.exports = router;