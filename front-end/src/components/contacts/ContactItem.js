// External Imports
// JavaScript
import React from 'react'
import ContactContext from '../../context/contact/ContactContext'

const ContactItem = ({ contact: { name, email, phone, type } }) => {
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
        <button className='btn btn-dark btn-sm'>Edit</button>
        <button className='btn btn-danger btn-sm'>Delete</button>
      </p>
    </div>
  )
}

export default ContactItem
