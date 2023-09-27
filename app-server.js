require('dotenv').config()
const express = require('express')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.static('build'))
app.use(express.json())

module.exports = app