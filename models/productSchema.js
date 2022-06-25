var mongoose = require("mongoose");

const bcrypt = require("bcrypt");
const { string } = require("joi");
var productSchema = new mongoose.Schema(
  {
    shopName: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      trim: true,
    },
    offerPrice: {
      type: Number,
      trim: true
    },
    productImage: {
      type: String,
      trim: true,
      default: "",
    },
    discount: {
      type: Number,
      trim: true,
    },
    key: {
      type: String,
      default: "",
      trim: true,
    },
    productName: {
      type: String,
      required: true,
      trim: true,
    },
    rating: {
      type: Number,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      trim: true
    },
    forgetPasswordOtpExpireTime: {
      type: Date,
    },
    accountActivationCode: {
      type: String,
    },
    createdBy: {
      type: String,
      default: false,
    },

  },
  {
    timestamps: true,
  }
);

var product = mongoose.model("products", productSchema);
module.exports = product;