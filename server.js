const express = require('express')
const app = express()
process.loadEnvFile()
const port = process.env.PORT ?? 3000
const morgan = require('morgan')
const mongoose = require('mongoose')

const URI = process.env.MONGODB_URLSTRING
const DATABASE_NAME = process.env.DATABASE_NAME