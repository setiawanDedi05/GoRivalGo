let axios = require("axios").default;
class News{
    static getNews(req, res, next) {

        let options = {
        method: 'GET',
        url: 'https://www.scorebat.com/video-api/v3/',
        
        
        };

        axios.request(options)
            .then((response) => {
                res.status(201).json({ "message": "success find Invitations", news : response.data });
            })
            .catch((error) => {
                console.log(error);;
            });
    }
}

module.exports = News
