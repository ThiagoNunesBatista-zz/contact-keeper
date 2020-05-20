const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')

module.exports = {

  async get (req, res) {
    res.send('Get User')
  },

  async create (req, res) {
    const { name, email, password } = req.body

    try {
      let user = await User.findOne({ email })

      if (user) {
        return res.status(400).json({ message: 'User Already Exists' })
      }

      user = new User({
        name,
        email,
        password
      })

      const salt = await bcrypt.genSalt(10)

      user.password = await bcrypt.hash(password, salt)
      await user.save()

      const payload = {
        user: {
          id: user.id
        }
      }

      jwt.sign(payload, config.get('jwtSecret'), {
        expiresIn: 3600
      }, (err, token) => {
        if (err) throw err

        return res.status(201).json({ message: 'User Was Created', token })
      })
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  },

  async update (req, res) {
    res.send('UPDATE USER')
  },

  async delete (req, res) {
    res.send('DELETE USER')
  }
}
