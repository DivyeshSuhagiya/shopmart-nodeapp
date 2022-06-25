const express = require("express");
const router = express.Router();

const productRoutes = require('./product');
const userRoutes = require('./user');
router.use('/product' , productRoutes);
router.use('/user' , userRoutes);

module.exports = router;