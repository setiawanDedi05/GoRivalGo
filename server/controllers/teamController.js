const { Team, Player, Invitations, Gor } = require("../models")
const { Op } = require("sequelize");
class TeamController{
    static getAllTeams(req, res, next) {
        Team.findAll({
            include : [Player]
        })
            .then((result) => {
                res.status(201).json({"message":"success findAll Teams", result})
            }).catch((err) => {
                next(err)
            });
    }

    static getTeam(req, res, next) {
        const {id} = req.params
        Team.findByPk(id, {
            include : [Player]
        })
            .then((result) => {
                if (result) {
                    res.status(201).json({"message":"success find Team", result})
                } else {
                    next({name : "DATA NOT FOUND"})
                }
        }).catch((err) => {
            next(err)
        });
    }

    static getHistoryTeam(req, res, next) {
        const { id } = req.params
        Invitations.findAll({
            where: {
                [Op.or]: [
                    { teamIdA: id },
                    { teamIdB : id }
                ]
            },
            include: [Gor,
                {
                    required: false,
                    model: Team,
                    as: 'teamA',
                }, {
                    required: false,
                    model: Team,
                    as: 'teamB',
                },{
                    required: false,
                    model: Team,
                    as: 'winner',
                }
            ],
            order: [
                ['dateMatch', 'DESC'],
                ['id', 'DESC']
            ],
        })
         .then((result) => {
                if (result) {
                    res.status(201).json({"message":"success history Team", result})
                } else {
                    next({name : "DATA NOT FOUND"})
                }
        }).catch((err) => {
            next(err)
        });
    }

    static addTeam(req, res, next) {
        let dataTeam = {
            name : req.body.name,
            city : req.body.city,
            imgUrl: req.body.imgUrl,
            status:"active"
        }
        let dataAdminPlayer = {
            name: req.body.namePlayer,
            city: req.body.city,
            date_of_birth: req.body.date_of_birth,
            gender: req.body.gender,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            role: "admin",
            status:"active"
        }
        Team.create(dataTeam)
            .then((result) => {
                dataAdminPlayer.teamId = result.id
                res.status(201).json({ "message": "Team Successfully Added" })
                return Player.create(dataAdminPlayer)
            })
            .then((result) => {
                console.log(result)
            })
            .catch((err) => {
                next(err)
            });
    }

    static updateTeam(req, res, next) {
        const {id} = req.params
        let dataTeam = {
            name : req.body.name,
            city : req.body.city,
            imgUrl : req.body.imgUrl
        }

        Team.update(dataTeam, {
            where: {
                id
            }
        })
            .then((result) => {
                if (result[0]) {
                    res.status(201).json({ "message": "Team Successfully Updated"})
                } else {
                    next({name : "DATA NOT FOUND"})
                }
            })
            .catch((err) => {
                next(err)
            });
    }

    static destroyTeam(req, res, next) {
        const { id } = req.params
        Team.update({status: "inactive"},{ where: { id } })
            .then((result) => {
                console.log(result[0]);
                if (result[0]) {
                    res.status(201).json({
                        "message" : "Team Successfully Deleted"
                    })
                }
                else {
                    next({name : "DATA NOT FOUND"})
                }
            }).catch((err) => {
                next(err)
            });
    }
}

module.exports = TeamController