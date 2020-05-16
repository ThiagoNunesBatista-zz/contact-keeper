// Set Router
const router = require('express').Router()
const UserController = require('../controllers/UserController')

router.get('/')
router.post('/')
router.put('/:id')
router.delete('/:id')

// Export Router
module.exports = router
