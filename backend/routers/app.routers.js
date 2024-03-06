const express = require("express");

const router = express.Router();
const controller = require("../controllers/app.controllers");

const loginSchema = require("../validators/login-validator");
const validate = require("../middlewares/validate-middleware");
const registerSchema = require("../validators/register-validator");
// Import authMiddleware
const authMiddleware = require('../middlewares/authMiddleware');


router.route("/").get(controller.home);
router.route("/login").post(validate(loginSchema), controller.login);
router.route("/register").post(validate(registerSchema), controller.register);
router.route('/posts').get(authMiddleware, controller.postsList);
module.exports = router;
