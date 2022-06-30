var mongoose = require("mongoose");

const bcrypt = require("bcrypt");
const { string } = require("joi");
var productSchema = new mongoose.Schema(
  {
    shopName: {
      type: String,
      trim: true,
      default : false,
      required :true
    },
    price: {
      type: Number,
      trim: true,
      default : false,
      required :true
    },
    offerPrice: {
      type: Number,
      trim: true,
      default : false,
      required :true
    },
    productImage: {
      type: String,
      trim: true,
      default: "",
      required :true
    },
    discount: {
      type: Number,
      trim: true,
      default : false,
      required :true
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
      default : false,
      required :true
    },
    rating: {
      type: Number,
      trim: true,
      default : false
    },
    category: {
      type: String,
      trim: true,
      default : false,
      required :true
    },
    userId : {
      type : String,
      trim : true,
      default :false,
      required :true
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