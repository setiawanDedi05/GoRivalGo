const PlayerController = require("../controllers/playerController")
const { authentication, autorizationPlayer } = require("../midleware/auth.js")

const route = require("express").Router()

route.get('/', PlayerController.getAllPlayers)
route.get('/:id', PlayerController.getPlayer)
route.post('/signin', PlayerController.signin)
route.patch('/signout/:id', PlayerController.signOut)
route.use(authentication)
route.post('/', PlayerController.addPlayer)
route.put('/:id', autorizationPlayer, PlayerController.updatePlayer)
route.patch('/:id', autorizationPlayer, PlayerController.destroyPlayer)

module.exports = route