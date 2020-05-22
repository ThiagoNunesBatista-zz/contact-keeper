// External Imports
// JavaScript
import React, { useContext } from 'react'

// Internal Imports
// JavaScript
import ContactContext from '../../context/contact/ContactContext'

const ContactItem = ({ contact }) => {
  const context = useContext(ContactContext)
  const { deleteContact, setCurrent, clearCurrent } = context

  const { _id, name, email, phone, type } = contact

  const handleDelete = () => {
    deleteContact(_id)
    clearCurrent()
  }

  const handleEdit = () => {
    setCurrent(contact)
  }

  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left'>{name[0].toUpperCase() + name.slice(1)}
        <span style={{ float: 'right' }} className={'badge ' + (type === 'professional' ? 'badge-success' : 'badge-primary')}>{type}</span>
      </h3>

      <ul>
        {email && <li><i className='fas fa-envelope-open'> {email}</i></li>}
        {phone && <li className='fas fa-phone'><i> {phone}</i></li>}
      </ul>

      <p>
        <button className='btn btn-dark btn-sm' onClick={handleEdit}>Edit</button>
        <button className='btn btn-danger btn-sm' onClick={handleDelete}>Delete</button>
      </p>
    </div>
  )
}

export default ContactItem
