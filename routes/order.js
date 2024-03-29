const express = require('express')
const Order = require('../models/Order')
const router = express.Router()
const mongoose = require('mongoose')

// Place New Order
router.post('/new', async (req, res) => {

  const order = new Order(req.body)
	try{
    await order.save()
		res.send({success: "Order Placed Successfully"})
	} catch(error){
		res.send({error: error.message})
	}
})

// Update Order Status
router.post('/update-status', async (req, res) => {

  const { orderID, orderStatus } = req.body

	try{
    await Order.findByIdAndUpdate({_id: orderID}, { orderStatus: orderStatus }) 
    
		res.send({success: "Order Status Updated Successfully"})
	} catch(error){
		res.send({error: error.message})
	}
})

// Get All Order
router.get('/', async (req, res) => {

  const { userID } = req.query
  
	try{
    if(userID){
      const orders = await Order.aggregate([
        { $match: { "userID": mongoose.Types.ObjectId(userID) }},
        { $sort: { "createdAt": -1 }},
      ])
      res.send({orders})
    }
    else{
      const orders = await Order.aggregate([
        { $sort: {"createdAt": -1 }},
      ])
      res.send({orders})
    }
	} catch(error){
		res.send({error: error.message})
	}
})

module.exports = router