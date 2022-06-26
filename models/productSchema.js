var mongoose = require("mongoose");

const bcrypt = require("bcrypt");
const { string } = require("joi");
var productSchema = new mongoose.Schema(
  {
    shopName: {
      type: String,
      trim: true,
      default : false
    },
    price: {
      type: Number,
      trim: true,
      default : false
    },
    offerPrice: {
      type: Number,
      trim: true,
      default : false
    },
    productImage: {
      type: String,
      trim: true,
      default: "",
    },
    discount: {
      type: Number,
      trim: true,
      default : false
    },
    key: {
      type: String,
      default: "",
      trim: true,
      default : false

    },
    productName: {
      type: String,
      trim: true,
      default : false
    },
    rating: {
      type: Number,
      trim: true,
      default : false
    },
    category: {
      type: String,
      trim: true,
      default : false
    },
    userId : {
      type : String,
      trim : true,
      default :false
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