const InvitaionController = require("../controllers/invitaionController")
const { authentication, autorizationPlayer, autorizationgor } = require("../midleware/auth")

const route = require("express").Router()
route.use(authentication)
route.get('/', InvitaionController.getAllInvitations)
route.get('/visitation/:gorId', InvitaionController.getAllVisitation)
route.get('/:dateMatch', InvitaionController.getInvitationByDate)
route.get('/:idTeam/schedule', InvitaionController.getInvitationByTeam)
route.get('/:idTeam/inbox', InvitaionController.getInbox)
route.get('/:id', InvitaionController.getInvitation)
route.post('/', autorizationPlayer, InvitaionController.addInvitation)
route.put('/:id', InvitaionController.updateInvitations)
route.patch('/:id', autorizationPlayer, InvitaionController.patchInvitations)
route.patch('/:id/theWinner', autorizationgor, InvitaionController.patchTheWinner)

module.exports = route