const validator = require('../helpers/validate');

const createuser = (req, res, next) => {
    const validationRule = {
        "useremail": "required|email",
        "username": "required|string",
        "lastname": "required|string"
    }
    validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.send({
                status: false,
                message: 'Validation failed',
                data: err
            });
        } else {
            next();
        }
    });
}

module.exports = {
    createuser
}