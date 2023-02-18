const mongoose = require('mongoose')

const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    productDesc: {
      type: String,
      required: true,
    },
    productSize: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      default: false
    },
    unit: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true
    },
    productImg: {
      type: String,
      default: ""
    }
  }, { timestamps: true }
)

mongoose.models = {}

module.exports = mongoose.model('Product', productSchema)