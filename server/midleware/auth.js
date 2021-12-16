const jwt = require("jsonwebtoken")
const { Player, Gor, Team, Invitations } = require("../models")

const authentication = (req, res, next) => {
    if(!req.headers.token) return next({name : "MISSING ACCESS TOKEN"})
    
    try {
        const verify = jwt.verify(req.headers.token, process.env.SECRET_TOKEN)
        req.user = verify.username
        req.id = verify.id
        req.role = verify.role
        req.teamId = verify.teamId
        req.gorId = verify.gorId
        Player.findByPk(req.id)
            .then(player => {
                console.log(player);
                if (!player) {
                    next ({ name: 'LOGIN FAIL' })
                } else {
                    next()
                }
            })
            .catch(err => console.log(err))
        
    }
    catch (err) {
        next({name : 'INVALID ACCESS TOKEN'})
    }

}

const autorizationPlayer = (req, res, next) => {
    const { id } = req.params
    if (req.role === 'player') {
        if (req.id == id) {
            Player.findOne({
                where: {
                    id: id,
                    teamId: req.teamId
                }
            })
                .then(player => {
                    if (!player) next({ name: 'NOT AUTORIZED' })
                    else {
                        req.player = player
                        next()
                    }
                })
                .catch(err => {
                    next(err)
                })
        } else {
            next({ name: 'NOT AUTORIZED' })
        }
    } else if (req.role === 'admin') {
         Team.findOne({
            where: {
                 id: id,
                teamId :  req.teamId
            }
        })
             .then(player => {
                req.player = player
                next()
            })
            .catch(err => {
                next(err)
            })
    }
}

const autorizationgor = (req, res, next) => {
    const { gorId } = req.params
    if (req.role === 'admin') {
        Gor.findOne({
            where: {
                id: gorId,
            }
        })
            .then(player => {
                next()
            })
            .catch(err => {
                next(err)
            })
    }
}

module.exports = { authentication, autorizationPlayer, autorizationgor }