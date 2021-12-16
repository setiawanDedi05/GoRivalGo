const teamRouter = require("./teamRouter")
const invitaiotnRouter = require("./invitaionRouter")
const playerRouter = require("./playerRouter")
const gorRouter = require("./gorRouter")
const newsRouter = require("./news")
const weatherRouter = require("./weather")
const route = require("express").Router()

route.use('/teams', teamRouter)
route.use('/invitations', invitaiotnRouter)
route.use('/gors', gorRouter)
route.use('/players', playerRouter)
route.use('/news', newsRouter)
route.use('/weather', weatherRouter)

module.exports = route