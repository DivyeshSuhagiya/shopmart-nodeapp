const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController")
const upload = require('../middleware/upload')

router.get('/get' , (req,res) => productController.product.get(req,res));
router.post('/post' , upload , (req,res) => productController.product.post(req,res));
router.post('/update', upload , (req,res) => productController.product.update(req,res));
router.delete('/delete' , (req,res) => productController.product.delete(req,res));
router.get('/getById' , (req,res) => productController.product.getById(req,res));

module.exports = router