const {Gor, Player} = require('../models')
class GorController{
    static getAllGors(req, res, next) {
        Gor.findAll({
            include : [Player]
        })
            .then((result) => {
                res.status(201).json({"message":"success findAll Gors", result})
            }).catch((err) => {
                next(err)
            });
    }

    static getGor(req, res, next) {
        const {id} = req.params
        Gor.findByPk(id)
            .then((result) => {
                if (result) {
                    res.status(201).json({"message":"success find Gor", result})
                } else {
                    next({name : "DATA NOT FOUND"})
                }
        }).catch((err) => {
            next(err)
        });
    }

    static addGor(req, res, next) {
        let dataGor = {
            name: req.body.name,
            city: req.body.city,
            rent_price:req.body.rent_price,
            time_available:req.body.time_available,
            status:req.body.status
        }
        console.log(dataGor, "ini");
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
        Gor.create(dataGor)
            .then((result) => {
                dataAdminPlayer.gorId = result.id
                res.status(201).json({ "message": "Gor Successfully Added" })
                return Player.create(dataAdminPlayer)
            })
            .then((result) => {
                console.log(result)
            })
            .catch((err) => {
                next(err)
            });
    }

    static updateGor(req, res, next) {
        const {id} = req.params
        let dataGor = {
            name: req.body.name,
            city: req.body.city,
            rent_price:req.body.rent_price,
            status:req.body.status,
            time_available:req.body.time_available
        }

        Gor.update(dataGor, {
            where: {
                id
            }
        })
            .then((result) => {
                if (result[0]) {
                    res.status(201).json({ "message": "Gor Successfully Updated"})
                } else {
                    next({name : "DATA NOT FOUND"})
                }
            })
            .catch((err) => {
                next(err)
            });
    }

    static destroyGor(req, res, next) {
        const { id } = req.params
        Gor.update({status: "inactive"},{ where: { id } })
            .then((result) => {
                if (result[0]) {
                    res.status(201).json({
                        "message" : "Gor Successfully Deleted"
                    })    
                } else {
                    next({name : "DATA NOT FOUND"})
                }
            }).catch((err) => {
                next(err)
            });
    }
}

module.exports = GorController