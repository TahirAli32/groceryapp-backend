const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema(
  {
    orderInfo:[{
      productName: String,
      productQuantity: String,
      productPrice: Number
    }],
    orderStatus: {
      type: String,
      default: "pending"
    },
    totalCost: {
      type: Number,
      required: true
    },
    userID:{
      type: mongoose.Types.ObjectId,
      required: true
    },
    contactInfo:{
      fullName: String,
      email: String,
      mobileNo: String,
      address: String
    }
  }, { timestamps: true }
)

mongoose.models = {}

module.exports = mongoose.model('Order', orderSchema)