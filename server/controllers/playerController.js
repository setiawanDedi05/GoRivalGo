const {Player, Team, Gor} = require('../models')
const { compareHash, hashPassword } = require("../helper/bcrypt")
const jwt = require("jsonwebtoken")

class PlayerController{

    static googleSignin(req, res, next) {
        let email
        let statusCode = 200
        const {token} = req.body
        client.verifyIdToken({
            idToken: token,
            audience: process.env.CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
            // Or, if multiple clients access the backend:
            //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
        })
            .then(ticket => {
                email = ticket.getPayload().email
                return Player.findOne({
                    where: { email }
                })
            })
            .then(player => {
                if (player) return player
                
                statusCode = 201
                return Player.create({
                    email,
                    password: process.env.DEFAULT_PASSWORD,
                    role: "player"
                })
            })
            .then(player => {
                const access_token = jwt.sign({ role:player.role, id:player.id }, process.env.SECRET_TOKEN)
                res.status(200).json({ "token": access_token, role : player.role, id: player.id, teamId:player.teamId, gorId:player.gorId })
            })
            .catch(err => next(err))
    }

    static signin(req, res, next) {
        Player.findOne({
            where: {
                username : req.body.username
            }
        })
            .then((player) => {
                if (compareHash(req.body.password, player.password)) {
                    console.log(req.body);
                    const { id, role, username, teamId, gorId } = player
                    const access_token = jwt.sign({ username, role, id, teamId, gorId }, process.env.SECRET_TOKEN)
                    Team.update({ isOnline: "true" }, {
                        where: {
                            id:teamId
                        }
                    })
                    .then((result) => {
                        res.status(200).json({ "token": access_token, username, role, id, teamId, gorId })
                    }).catch((err) => {
                        console.log(err);
                    });
                    
                } else {
                    next({name : "INVALID USERNAME/PASSWORD"})
                }
            })
            .catch((err) => {
                console.log(err.stack)
                next({name : "INVALID USERNAME/PASSWORD"})
            })
    }

    static getAllPlayers(req, res, next) {
        Player.findAll({
            include : [Team, Gor]
        })
            .then((result) => {
                res.status(201).json({"message":"success findAll Players", result})
            }).catch((err) => {
                next(err)
            });
    }

    static getPlayer(req, res, next) {
        const {id} = req.params
        Player.findByPk(id, {
            include : [Team]
        })
            .then((result) => {
                if (result) {
                    res.status(201).json({"message":"success find Player", result})
                } else {
                    next({name : "DATA NOT FOUND"})
                }
        }).catch((err) => {
            next(err)
        });
    }

    static addPlayer(req, res, next) {
        const role = req.body.role || "player" 
        let dataPlayer = {
            name: req.body.name,
            city: req.body.city,
            date_of_birth: req.body.date_of_birth,
            gender: req.body.gender,
            teamId: req.teamId,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            status:"active",
            role
        }
        Player.create(dataPlayer)
            .then((result) => {
                res.status(201).json({ "message": "Player Successfully Added" })
            })
            .catch((err) => {
                next(err)
            });
    }

    static updatePlayer(req, res, next) {
        const role = req.body.role || "player"
        const { id } = req.params
        let dataPlayer = {
            name: req.body.name,
            city: req.body.city,
            date_of_birth: req.body.date_of_birth,
            gender: req.body.gender,
            teamId: req.teamId,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            status: "active",
            role: role
        }

        Player.update(dataPlayer, {
            where: {
                id
            }
        })
            .then((result) => {
                if (result[0]) {
                    res.status(201).json({ "message": "Player Successfully Updated"})
                } else {
                    next({name : "DATA NOT FOUND"})
                }
            })
            .catch((err) => {
                next(err)
            });
    }

    static destroyPlayer(req, res, next) {
        const { id } = req.params
        Player.update({status: "inactive"},{ where: { id } })
            .then((result) => {
                if (result[0]) {
                    res.status(201).json({
                        "message" : "Player Successfully Deleted"
                    })    
                } else {
                    next({name : "DATA NOT FOUND"})
                }
            }).catch((err) => {
                next(err)
            });
    }

    static signOut(req, res, next) {
        const { id } = req.params
        Team.update({isOnline: false},{ where: { id } })
            .then((result) => {
                if (result[0]) {
                    res.status(201).json({
                        "message" : "Admin Successfully Logout"
                    })    
                } else {
                    next({name : "DATA NOT FOUND"})
                }
            }).catch((err) => {
                next(err)
            });
    }
}

module.exports = PlayerController