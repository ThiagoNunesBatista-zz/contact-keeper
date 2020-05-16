const { check } = require('express-validator')

module.exports = {
  validate () {
    return [
      check('email').trim().optional()
        .isEmail().withMessage('Email is Invalid'),

      check('name')
        .not().isEmpty().withMessage('Name is Required')
    ]
  }
}
