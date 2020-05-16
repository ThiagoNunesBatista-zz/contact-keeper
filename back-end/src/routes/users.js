// Set Router
const router = require('express').Router()
const UserController = require('../controllers/UserController')
const { validate } = require('../middlewares/validation/UserValidator')
const { checkValidationResult } = require('../middlewares/validation')

router.get('/')
router.post('/', validate(), checkValidationResult, UserController.create)
router.put('/:id', validate(), checkValidationResult, UserController.update)
router.delete('/:id', validate(), checkValidationResult, UserController.delete)

// Export Router
module.exports = router
