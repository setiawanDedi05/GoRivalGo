require("dotenv").config()
const express = require('express')
const app = express()
const port = 3000
const route = require("./routes")
const cors = require('cors')
const errorHandler = require("./midleware/errorHandler")

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(route)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Listen On :${port}`)
})