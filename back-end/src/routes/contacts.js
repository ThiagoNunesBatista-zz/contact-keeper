// Set Router
const router = require('express').Router()
const ContactController = require('../controllers/ContactController')

router.get('/', ContactController.getAll)
router.post('/', ContactController.create)
router.put('/:id', ContactController.update)
router.delete('/:id', ContactController.delete)

// Export Router
module.exports = router
