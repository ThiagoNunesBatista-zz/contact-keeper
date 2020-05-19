// External Imports
// JavaScript
import React, { useContext, useState } from 'react'

// Internal Imports
// JavaScript
import ContactContext from '../../context/contact/ContactContext'

const ContactForm = () => {
  const context = useContext(ContactContext)

  const { addContact } = context

  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal'
  })

  const { name, email, phone, type } = contact

  const handleChange = e => {
    setContact({ ...contact, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    addContact(contact)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className='text-primary'>Add Contact</h2>

      <input type='text' name='name' placeholder='Name' value={name} onChange={handleChange} />

      <input type='email' name='email' placeholder='Email' value={email} onChange={handleChange} />

      <input type='text' name='phone' placeholder='Phone' value={phone} onChange={handleChange} />

      <h5>Contact Type</h5>
      <input type='radio' id='personal' name='type' value='personal' checked={type === 'personal'} onChange={handleChange} />
      <label htmlFor='personal'>Personal</label>

      <input type='radio' name='type' value='professional' checked={type === 'professional'} onChange={handleChange} />
      <label htmlFor='professional'>Professional</label>

      <input type='submit' value='Add Contact' className='btn btn-primary btn-block' />
    </form>
  )
}

export default ContactForm
