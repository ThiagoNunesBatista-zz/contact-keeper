
const { validationResult } = require('express-validator')

module.exports = {
  async checkValidationResult (req, res, next) {
    const errors = validationResult(req)

    if (errors.isEmpty()) {
      next()
    } else if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() })
    }
  }

}
