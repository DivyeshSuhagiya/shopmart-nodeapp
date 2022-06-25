const mongoose = require('mongoose')
const PRODUCT = mongoose.model('products')
const multer = require('multer')
const path = require('path')
const {
  badRequestResponse,
  successResponse,
  notFoundResponse,
  errorResponse
} = require('../middleware/response')
exports.product = {
  get: async (req, res) => {
    try {
      const products = await PRODUCT.find({})
      res.json({
        isSuccess: true,
        data: products
      })
    } catch (error) {
      res.json({
        isSuccess: false,
        data: error
      })
    }
  },
  post: async function (req, res) {
    try {
      const product = {
        shopName: req.body.shopName,
        price: req.body.price,
        offerPrice: req.body.offerPrice,
        discount: req.body.discount,
        productName: req.body.productName,
        rating: req.body.rating,
        category: req.body.category
      }
      if(req.file){
        product.productImage = req.file.path
      }

      const isCreated = await PRODUCT.create(product)
      if (isCreated) {
        return successResponse(res, {
          message: 'Product created successfully',
        })
      } else {
        return badRequestResponse(res, {
          message: 'Failed to create product',
        })
      }

    } catch (error) {
      return errorResponse(error, req, res)
    }

  },
  update: async function (req, res) {
    try {

      const productInfo = await PRODUCT.findOne({
        _id: req.body.id,
      })
      if (!productInfo) {
        return badRequestResponse(res, {
          message: 'Product not found',
        })
      }
      const product = {
        shopName: req.body.shopName,
        price: req.body.price,
        offerPrice: req.body.offerPrice,
        discount: req.body.discount,
        productName: req.body.productName,
        rating: req.body.rating,
        category: req.body.category
      }
        if(req.file){
          product.productImage = req.file.path
        }
          await PRODUCT.findOneAndUpdate(
            { _id: productInfo._id },
            {
              $set: product,
            },
          )
          return successResponse(res, {
            message: 'Product updated successfully',
          })
    } catch (error) {
      return errorResponse(error, req, res)
    }
  },
  delete: async function (req, res) {
    try {
      const productInfo = await PRODUCT.findOne({
        _id: req.query.id,
      })
      if (!productInfo) {
        return badRequestResponse(res, {
          message: 'User not found',
        })
      }
      await PRODUCT.findByIdAndRemove({
        _id: productInfo._id,
      })
      return successResponse(res, {
        message: 'User deleted successfully',
      })
    } catch (error) {
      return errorResponse(error, req, res)
    }
  },
  getById: async function (req, res) {
    try {
      const productInfo = await PRODUCT.findOne({
        _id: req.query.id,
      })
      if (!productInfo) {
        return badRequestResponse(res, {
          message: 'User not found',
        })
      }
      return successResponse(res, {
        data: productInfo,
      })
    } catch (error) {
      return errorResponse(error, req, res)
    }
  }
}