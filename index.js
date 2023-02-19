const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const PORT = process.env.PORT || 4000
const app = express()
const mongoose = require('mongoose')
const { createServer } = require('http')

const server = createServer(app)

dotenv.config()

mongoose.connect(process.env.MONGODB_URI)

app.use(express.json())

app.use(cors())

// Root Route, not used in API
app.get('/', (req,res) => {
  res.json({ success: "Success" })
})

// Authentication Route
app.use('/api/auth', require('./routes/auth'))

// Category Route
app.use('/api/category', require('./routes/category'))

// Product Route
app.use('/api/product', require('./routes/product'))

// Order Route
app.use('/api/order', require('./routes/order'))

server.listen(PORT, ()=> {
  if(process.env.NODE_ENV !== 'production')
    console.log('Server running on http://localhost:'+PORT)
})