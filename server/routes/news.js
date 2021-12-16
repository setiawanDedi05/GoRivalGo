const News = require("../controllers/news")
const route = require("express").Router()

route.get('/', News.getNews)

module.exports = route