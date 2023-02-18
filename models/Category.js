const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema(
  {
    categoryName: {
      type: String,
      required: true,
    },
    categoryImg: {
      type: String,
      default: ""
    }
  }, { timestamps: true }
)

mongoose.models = {}

module.exports = mongoose.model('Category', categorySchema)