const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const User = require('../models/User')

module.exports = {

  async get (req, res) {
    const { user } = req
    try {
      const userDB = await User.findById(user.id).select('-password')
      return res.status(200).json({ user: userDB })
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  },

  async create (req, res) {
    const { email, password } = req.body

    try {
      const user = await User.findOne({ email })

      if (!user) {
        return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] })
      }

      const isMatch = await bcrypt.compare(password, user.password)

      if (!isMatch) {
        return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] })
      }

      const payload = {
        user: {
          id: user.id
        }
      }

      jwt.sign(payload, config.get('jwtSecret'), {
        expiresIn: 3600
      }, (err, token) => {
        if (err) throw err

        return res.status(200).json({ message: 'Authenticated With Success', token })
      })
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  }
}
