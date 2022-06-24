const express = require('express')
const app = express()

const { setRoutes } = require('./routes/router')

const cors = require('cors')

let port = 4201
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


setRoutes(app)

app.listen(port)
console.log('service started at port ' + port)
module.exports = app
