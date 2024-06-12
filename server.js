const express = require('express')
const app = express()
const connectDB = require('./src/mongoose.js')
const port = process.env.PORT ?? 3000
const morgan = require('morgan')
const Product = require('./src/productModel.js')

connectDB()

app.use(express.json())
app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.json('Bienvenido a la API de la tienda de Productos Tecnologicos!')
  })

//Obtener la lista de todos los productos
app.get('/productos', async (req, res) => {
  const { categoria } = req.query
  const query = !categoria ? {} : { genre: { $regex: categoria, $options: 'i' } }
  try {
    const productos = await Product.find(query)
    res.json(productos)
  } catch (error) {
    res.status(500).send('Error al obtener los productos')
  }
})
//Obteniendo productos por ID
app.get('/productos/:id', async (req, res) => {
  const { id } = req.params
  const producto = await Product.findById(id)
  if (producto) return res.json(producto)
  res.status(404).json({ message: 'Peli no encontrada' })
})


  app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
  })