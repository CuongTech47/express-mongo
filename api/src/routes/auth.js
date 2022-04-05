const express = require("express")
const {requiresAuth} = require('express-openid-connect')
const router = express.Router()

const authController = require("../controllers/api/AuthController")

router.get("/", authController.index)
router.get("/profile", requiresAuth(), authController.profile)
router.post("/saveUser", requiresAuth(), authController.saveUser)
router.get("/showUser", authController.showUser)
module.exports = router