const { Invitations, Gor, Team, Player } = require('../models')
const nodemailer = require('nodemailer');
const { Op } = require('sequelize');
class InvitaionController{
    static getAllInvitations(req, res, next) {
        Invitations.findAll({
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
            ]
        })
            .then((result) => {
                res.status(201).json({"message":"success findAll Invitationss", result})
            }).catch((err) => {
                next(err)
            });
    }

    static getAllVisitation(req, res, next) {
        Invitations.findAll({
            where: {
                gorId: req.params.gorId
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
                }, {
                    required: false,
                    model: Team,
                    as: 'winner',
                }
            ]
        })
            .then((result) => {
                res.status(201).json({ "message": "success findAll Invitationss", result })
            }).catch((err) => {
                next(err)
            });
    }

    static getInvitationByDate(req, res, next) {
        Invitations.findAll({
            where: {
                dateMatch: req.params.dateMatch
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
                }, {
                    required: false,
                    model: Team,
                    as: 'winner',
                }
            ]
        })
            .then((result) => {
                res.status(201).json({ "message": "success findAll Invitationss by Date", result })
            }).catch((err) => {
                next(err)
            });
    }

    static getInvitationByTeam(req, res, next) {
        console.log(req.params.idTeam);
        Invitations.findAll({
            where: {
                [Op.or]:
                    [
                        { teamIdA: req.params.idTeam },
                        { teamIdB: req.params.idTeam }
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
                }, {
                    required: false,
                    model: Team,
                    as: 'winner',
                }
            ]
        })
            .then((result) => {
                res.status(201).json({ "message": "success findAll Invitationss by team", result })
            }).catch((err) => {
                next(err)
            });
    }

    static getInbox(req, res, next) {
        console.log(req.params.idTeam);
        Invitations.findAll({
            where: {
                teamIdB: req.params.idTeam
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
                }, {
                    required: false,
                    model: Team,
                    as: 'winner',
                }
            ]
        })
            .then((result) => {
                res.status(201).json({ "message": "success findAll Inbox", result })
            }).catch((err) => {
                next(err)
            });
    }

    static getInvitation(req, res, next) {
        const {id} = req.params
        Invitations.findByPk(id)
            .then((result) => {
                if (result) {
                    res.status(201).json({"message":"success find Invitations", result})
                } else {
                    next({name : "DATA NOT FOUND"})
                }
        }).catch((err) => {
            next(err)
        });
    }

    static addInvitation(req, res, next) {
        let getEmailTeamA = Player.findOne({
            where: {
                teamId : req.body.teamIdA
            }
        })
        let getEmailTeamB = Player.findOne({
            where: {
                teamId : req.body.teamIdB
            }
        })

        let getDataTeamA = Team.findOne({
            where: {
                id : req.body.teamIdA
            }
        })
        let getDataTeamB = Team.findOne({
            where: {
                id : req.body.teamIdB
            }
        })

        let dataInvitations = {
            teamIdA: req.body.teamIdA,
            teamIdB: req.body.teamIdB,
            gorId: req.body.gorId,
            theWinnerId:req.body.theWinnerId,
            status:req.body.status,
            dateMatch:req.body.dateMatch,
            timeMatch:req.body.timeMatch
        }
        Invitations.create(dataInvitations)
            .then((result) => {
                console.log(result);
                res.status(201).json({ "message": "Invitations Successfully Added" })
                return Promise.all([getEmailTeamA, getEmailTeamB, getDataTeamA, getDataTeamB])
            })
            .then(([playerA, playerB, teamA, teamB]) => {
                const myemail = 'ddie.theonlyone@gmail.com'
                let transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: myemail,
                        pass: 'Althafunnisa1'
                    }
                })

                let mailOptionsTeamB = {
                    from: myemail,
                    to: playerB.email,
                    subject: `Invitation`,
                    html: `Hi <b>${playerB.name}</b>!
                    <br>is <b> ${teamB.name} </b> yours?
                    <br> <b>Team ${teamA.name} </b> the owner is <i>${playerA.name}</i> invite your team  for match. <b>come on and accept this invitation!</b> 
                    <br>
                    Thanks,
                    <br>
                    <b>GoRivalGo Team</b>
                    <br>
                    <img src='https://ik.imagekit.io/cujeun8cplg/Black__White_and_Yellow_Lightning_Vaken_Energy_Drink_Logo_RgBm3jfn5LW.png?updatedAt=1633945280200' width='100'>
                    <br><span><a href='https://www.gorivalgo.com'>https://www.gorivalgo.com</a></span>`
                }

                transporter.sendMail(mailOptionsTeamB, function (error, info) {
                    if (error) {
                        console.log(error);
                    } else {
                        console.log(`email sent to ${playerB.email}`);
                    }
                })

                let mailOptionsTeamA = {
                    from: myemail,
                    to: playerA.email,
                    subject: `Feedback`,
                    html: `Hi <b>${playerA.name}</b>!
                    <br>is <b> ${teamA.name} </b> yours?
                    <br> Your Invitation hasbeen sent to <b>${teamB.name}</b> via <i>${playerB.email}</i>
                    <br>I hope ${playerB.name} accept your invitation 
                    <br>
                    Thanks,
                    <br>
                    <b>GoRivalGo Team</b>
                    <br>
                    <img src='https://ik.imagekit.io/cujeun8cplg/Black__White_and_Yellow_Lightning_Vaken_Energy_Drink_Logo_RgBm3jfn5LW.png?updatedAt=1633945280200' width='100'>
                    <br><span><a href='https://www.gorivalgo.com'>https://www.gorivalgo.com</a></span>`
                }

                transporter.sendMail(mailOptionsTeamA, function (error, info) {
                    if (error) {
                        console.log(error);
                    } else {
                        console.log(`email sent to ${playerA.email}`);
                    }
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    static updateInvitations(req, res, next) {
        const {id} = req.params
        let dataInvitations = {
            teamIdA: req.body.teamIdA,
            teamIdB: req.body.teamIdB,
            gorId: req.body.gorId,
            theWinnerId:req.body.theWinnerId,
            status: req.body.status,
            dateMatch: req.body.dateMatch
        }

        Invitations.update(dataInvitations, {
            where: {
                id
            }
        })
            .then((result) => {
                if (result[0]) {
                    res.status(201).json({ "message": "Invitations Successfully Updated"})
                } else {
                    next({name : "DATA NOT FOUND"})
                }
            })
            .catch((err) => {
                next(err)
            });
    }

    static patchInvitations(req, res, next) {
        const { id } = req.params
        const timeMatch = req.body.timeMatch || 0
        Invitations.update({status: req.body.status, timeMatch},{ where: { id } })
            .then((result) => {
                if (result[0]) {
                    res.status(201).json({
                        "message" : "Invitations Successfully updated"
                    })
                } else {
                    next({name : "DATA NOT FOUND"})
                }
            }).catch((err) => {
                next(err)
            });
    }

    static patchTheWinner(req, res, next) {
        const { id } = req.params
        Invitations.update({ theWinnerId: req.body.winnerId, status : 'finish' }, { where: { id } })
            .then((result) => {
                if (result[0]) {
                    res.status(201).json({
                        "message": "Invitations Successfully updated"
                    })
                } else {
                    next({ name: "DATA NOT FOUND" })
                }
            }).catch((err) => {
                next(err)
            });
    }
}

module.exports = InvitaionController