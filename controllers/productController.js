const { func } = require('joi')
const mongoose = require('mongoose')
const PRODUCT = mongoose.model('products')
const multer = require('multer')
const path = require('path')
const cloudinary = require('cloudinary').v2;


cloudinary.config({
  cloud_name: 'dhhptbxer',
  api_key: '162163173464867',
  api_secret: 'AkpAvOHhM1x6VAHTa7ZHEJuEjTo',
  secure: true
});

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

      const file = req.files.productImage;
      cloudinary.uploader.upload(file.tempFilePath, async(err, result) => {
        // console.log(result.url)
        const product = {
          shopName: req.body.shopName,
          price: req.body.price,
          offerPrice: req.body.offerPrice,
          discount: req.body.discount,
          productName: req.body.productName,
          rating: req.body.rating,
          category: req.body.category,
          userId: req.body.userId,
          productImage: result.url
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


      })
      // if(req.file){
      //   product.productImage = req.file.path
      // }




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

      // if(req.file){
      //   product.productImage = req.file.path
      // }
      const file = req.files.productImage;
      cloudinary.uploader.upload(file.tempFilePath, async (err, result) => {
        const product = {
          shopName: req.body.shopName,
          price: req.body.price,
          offerPrice: req.body.offerPrice,
          discount: req.body.discount,
          productName: req.body.productName,
          rating: req.body.rating,
          category: req.body.category,
          userId: req.body.userId,
          productImage: result.url
        }
        await PRODUCT.findOneAndUpdate(
          { _id: productInfo._id },
          {
            $set: product,
          },
        )
      })

      
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
  },
  search: async function (req, res) {
    try {
      const productInfo = await PRODUCT.find({
        // category : {$regex :  req.params.category}
        category: { $regex: `.*${req.params.category}.*`, $options: "i" }
      })
      return successResponse(res, {
        data: productInfo,
      })
    } catch (error) {
      return errorResponse(error, req, res)
    }
  },
  deleteAll: async function (req, res) {
    try {
      await PRODUCT.remove()
      return successResponse(res, {
        message: 'All Product deleted successfully',
      })
    } catch (error) {
      return errorResponse(error, req, res)
    }
  }
}