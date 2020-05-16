// Set Router
const router = require('express').Router()

router.get('/', (req, res) => {
  res.send('Get logged in user')
})
router.post('/', (req, res) => {
  res.send('Authenticate User To Access Private Routes')
})

// Export Router
module.exports = router
