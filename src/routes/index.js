// Set Router
const router = require('express').Router()

// Set Routes
router.use('/auth', require('./auth'))
router.use('/contacts', require('./contacts'))
router.use('/users', require('./users'))

// Export Router
module.exports = router
