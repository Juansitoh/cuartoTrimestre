const { check } = require('express-validator')
const { validationResult } = require('express-validator')

const validatorResult = (req, res, next) => {
    try {
        validationResult(req).throw()
        return next()
    } catch (errr) {
        res.status(403)
        res.send({ errors: err.array() })
    }
}

const validateCreate = [
    check('ID_Rol')
        .exists()
        .not()
        .isEmpty(),
    check('Correo')
        .exists()
        .not()
        .isEmpty(),
    
    (req,  res, next) => {
        validationResult(req, res, next)
    }
]

module.exports = { validatorResult }
module.exports = { validateCreate }