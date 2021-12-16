const TeamController = require("../controllers/teamController")
const route = require("express").Router()

const multer  = require('multer')
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

const imageKit = require("../helper/imageKit")

route.get('/', TeamController.getAllTeams)
route.get('/:id', TeamController.getTeam)
route.get('/histories/:id', TeamController.getHistoryTeam)
route.post('/',upload.single('imgUrl'), imageKit, TeamController.addTeam)
route.put('/:id', upload.single('imgUrl'), imageKit, TeamController.updateTeam)
route.patch('/:id', TeamController.destroyTeam)

module.exports = route