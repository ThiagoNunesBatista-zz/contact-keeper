// Required Modules
const express = require('express')
const connectDB = require('../config/db')

// Connect Database
connectDB()

// Set Express
const PORT = process.env.PORT || 3333
const app = express()
const routes = require('./routes')
app.use(routes)

app.listen(PORT, () => {
  console.log(`Express started on port ${PORT}`)
})
