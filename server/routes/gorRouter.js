const GorController = require("../controllers/gorController")

const route = require("express").Router()

route.get('/', GorController.getAllGors)
route.get('/:id', GorController.getGor)
route.post('/', GorController.addGor)
route.put('/:id', GorController.updateGor)
route.patch('/:id', GorController.destroyGor)

module.exports = route