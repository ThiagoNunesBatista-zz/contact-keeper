// Set Router
const router = require('express').Router()
const AuthController = require('../controllers/AuthController')
const { validate } = require('../middlewares/validation/AuthValidator')
const { checkValidationResult } = require('../middlewares/validation')
const checkJwt = require('../middlewares/authentication/checkJwt')

router.get('/', checkJwt, AuthController.get)
router.post('/', validate(), checkValidationResult, AuthController.create)

// Export Router
module.exports = router
