const FormData = require("form-data")
const axios = require("axios")
async function imageKit(req, res, next) {
    if (!req.file) {
        console.log(req.body);
        next({name : 'NOT FOUND'})
    } else {
        if (req.file.size >= 255000) {
            console.log("FILE TOO LARGE");
        } else {
            console.log("ok", "<<<<");
            const form = new FormData()
            form.append('file', req.file.buffer.toString('base64'))
            form.append('fileName', req.file.originalname)
            const privateKey = new Buffer.from(process.env.APIPRIVATEIMAGEKIT + ":").toString('base64')
            console.log(form);
            const uploader = await axios({
                method: "POST",
                url: 'https://upload.imagekit.io/api/v1/files/upload',
                data: form,
                headers: {
                    ...form.getHeaders(),
                    Authorization: `Basic ${privateKey}`
                }
            })
            req.body.imgUrl = uploader.data.url
            next()
        }
    }
}

module.exports = imageKit