var mongoose = require("mongoose");

const bcrypt = require("bcrypt");
const { string } = require("joi");
var productSchema = new mongoose.Schema(
  {
    shopName: {
      type: String,
      required: true,
      trim: true,
      require:true
    },
    price: {
      type: Number,
      required: true,
      trim: true,
      require:true
    },
    offerPrice: {
      type: Number,
      trim: true,
      require:true
    },
    productImage: {
      type: String,
      trim: true,
      default: "",
      require:true
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
    userId : {
      type : String,
      required : true,
      trim : true
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