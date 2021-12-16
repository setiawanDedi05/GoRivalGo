const Weather = require("../controllers/weather")

const route = require("express").Router()

route.get('/:codeLocation', Weather.getWeather)
route.get('/kode/codeLocation', Weather.getCodeLocation)

module.exports = route