const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController")

router.get('/get' , (req,res) => userController.user.get(req,res));

router.get('/getById' , (req,res) => userController.user.getById(req,res));

router.delete('/delete' , (req,res) => userController.user.delete(req,res));

router.post('/login' , (req,res) => userController.user.login(req,res));

router.post('/register' , (req,res) => userController.user.register(req,res));

router.post('/activateAccount' , (req,res) => userController.user.activateAccount(req,res));

router.post('/forgetPassword' , (req,res) => userController.user.forgetPassword(req,res));

router.post('/verifyOtpCode' , (req,res) => userController.user.verifyOtpCode(req,res));

router.post('/changePassword' , (req,res) => userController.user.changePassword(req,res));



module.exports = router