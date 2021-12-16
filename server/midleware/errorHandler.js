const errorHandler = (err, req, res, next) => {

    let statusCode
    let errors = []
    console.log(err.name);
    switch (err.name) {
        case 'SequelizeUniqueConstraintError':
            statusCode = 402
            errors = err.errors ? err.errors.map((el) => el.message) : []
            break
        case 'SequelizeValidationError':
            statusCode = 400
            errors = err.errors ? err.errors.map((el) => el.message) : []
            break
        case "MISSING ACCESS TOKEN":
            statusCode = 401
            errors.push('Missing Access Token')
            break
        case "LOGIN FAIL":
            statusCode = 401
            errors.push('Login Failed, Maybe Account hasbeen deleted')
            break
        case "INVALID ACCESS TOKEN":
            statusCode = 401
            errors.push('Invalid Access Token')
            break
        case "ACCESS DENIED":
            statusCode = 401
            errors.push('Access Denied')
            break
        case "RESOURCE EMPTY":
            statusCode = 401
            errors.push('Resource Empty')
            break
        case "FILE TOO LARGE":
            statusCode = 401
            errors.push('File Terlalu Besar')
            break
        case "INVALID USERNAME/PASSWORD":
            statusCode = 401
            errors.push('Invalid Username/Password')
            break
        case "DATA NOT FOUND":
            statusCode = 401
            errors.push('Data Not Found')
            break
        case "NOT AUTORIZED":
            statusCode = 403
            errors.push('Not Autorized')
            break
        default:
            statusCode = 500
            errors.push('Internal Server Error')
    }

    res.status(statusCode).json(errors)
}

module.exports = errorHandler