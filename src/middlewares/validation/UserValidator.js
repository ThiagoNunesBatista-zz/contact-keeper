const { check } = require('express-validator')

module.exports = {
  validate () {
    return [
      check('email').trim()
        .isEmail().withMessage('Email is Invalid'),

      check('name')
        .not().isEmpty().withMessage('Name is Required'),

      check('password')
        .not().isEmpty().withMessage('Password is Required')
        .isLength({ min: 6, max: 15 }).withMessage('Password Must Be Between 6 and 15 Characters')
    ]
  }
}
