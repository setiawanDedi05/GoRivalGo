let axios = require("axios").default;
class Weather{
    static getWeather(req, res, next) {
        const codeLocation = req.params.codeLocation
        let options = {
        method: 'GET',
        url: `https://ibnux.github.io/BMKG-importer/cuaca/${codeLocation}.json`
        };

        axios.request(options)
            .then((response) => {
                res.status(201).json({ "message": "success find weathers", news : response.data });
            })
            .catch((error) => {
                console.log(error);;
            });
    }
    static getCodeLocation(req, res, next) {
        let options = {
        method: 'GET',
        url: `https://ibnux.github.io/BMKG-importer/cuaca/wilayah.json`
        };

        axios.request(options)
            .then((response) => {
                res.status(201).json({ "message": "success find Code Location", news : response.data });
            })
            .catch((error) => {
                console.log(error);;
            });
    }
}

module.exports = Weather
