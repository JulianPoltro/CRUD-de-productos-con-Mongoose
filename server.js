const express = require('express')
const app = express()
const connectDB = require('./src/mongoose.js')
const port = process.env.PORT ?? 3000
const morgan = require('morgan')
const Product = require('./src/productModel.js')

connectDB()

app.use(express.json())
app.use(morgan('dev'))