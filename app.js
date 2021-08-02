
'use strict'

// Built-in Modules
const http = require('http')
const cors = require('cors')

// NPM Modules
const express = require('express')

// Initiate express
const app = express()

// Custom Modules
const routes = require('./routes/routes.js')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

// Serve routes
routes.handler(app)

let startServer = () => {
  try {
    http.createServer(app).listen(8080, () => {
      console.log(`server started at ${new Date().toLocaleString()}`)
      console.log(`HTTP Port: 8080`)
    })
  } catch (error) {
    console.log(`DB Connection Failed: `, error)
  }
}

startServer()
