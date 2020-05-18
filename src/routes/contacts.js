// Set Router
const router = require('express').Router()
const ContactController = require('../controllers/ContactController')
const checkJwt = require('../middlewares/authentication/checkJwt')
const { validate } = require('../middlewares/validation/ContactValidator')
const { checkValidationResult } = require('../middlewares/validation')

router.get('/', checkJwt, ContactController.getAll)
router.post('/', checkJwt, validate(), checkValidationResult, ContactController.create)
router.put('/:id', checkJwt, validate(), checkValidationResult, ContactController.update)
router.delete('/:id', checkJwt, ContactController.delete)

// Export Router
module.exports = router
