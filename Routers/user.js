/**
 * @fileoverview Express router for user authenication router
 * @desc use this router only for user related stuff.
 */

var router = require("express").Router();
var registerController = require("../Controllers/registerController");
var loginController = require("../Controllers/loginController");
var logoutContoller = require("../Controllers/logoutController");
var deleteController = require("../Controllers/deleteController");

router.post("/register", registerController.register);
router.post("/login", loginController.login);
router.post("/logout", logoutContoller.logout);
router.delete("/user/delete", deleteController.deleteUser);

module.exports = router;