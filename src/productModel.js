const mongoose = require('mongoose')

// Definir el esquema y el modelo de Mongoose
const productSchema = new mongoose.Schema({
    nombre: String,
    importe: Number,
    categoria: String,
})
const Product = mongoose.model('products', productSchema)

module.exports = Product
