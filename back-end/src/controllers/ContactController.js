const Contact = require('../models/Contact')

module.exports = {

  async getAll (req, res) {
    try {
      const contacts = await Contact.find({ user: req.user.id }).sort({ date: -1 })
      res.status(200).json({ contacts })
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  },

  async create (req, res) {
    const { email, name, phone, type } = req.body

    try {
      const newContact = new Contact({
        name,
        email,
        phone,
        type,
        user: req.user.id
      })

      const contact = await newContact.save()

      return res.status(201).json({ contact })
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  },

  async update (req, res) {
    try {
      let contact = await Contact.findOne({ _id: req.params.id })

      if (contact === null) {
        res.status(401).json({ message: 'Access Not Authorized' })
      }

      if (contact.user.toString() !== req.user.id.toString()) {
        res.status(401).json({ message: 'Access Not Authorized' })
      }

      // Build contact object
      const { name, email, type, phone } = req.body

      const contactFields = {}
      if (name) contactFields.name = name
      if (email) contactFields.email = email
      if (phone) contactFields.phone = phone
      if (type) contactFields.type = type

      contact = await Contact.findByIdAndUpdate(req.params.id, { $set: contactFields }, { useFindAndModify: false })

      return res.status(201).json({ contact })
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  },

  async delete (req, res) {
    try {
      const contact = await Contact.findOneAndDelete({ _id: req.params.id, user: req.user.id })

      if (!contact) {
        return res.status(401).json({ message: 'Access Not Authorized' })
      }
      return res.status(200).json({ message: 'Contact Deleted' })
    } catch (err) {
      console.log('ERRÃO')
      res.status(500).json({ message: err.message })
    }
  }
}
