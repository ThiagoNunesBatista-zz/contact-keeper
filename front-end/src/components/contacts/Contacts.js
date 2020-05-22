// External Imports
// JavaScript
import React, { useContext } from 'react'

// Internal Imports
// JavaScript
import ContactContext from '../../context/contact/ContactContext'
import ContactItem from './ContactItem'

const Contacts = () => {
  // Set Context
  const context = useContext(ContactContext)

  // Destructuring - Getting The Needed Values
  const { contacts, filtered } = context

  return (
    <>
      {filtered ? filtered.map(current => <ContactItem contact={current} key={current._id} />) : (contacts ? contacts.map(current => <ContactItem contact={current} key={current._id} />) : '')}
    </>
  )
}

export default Contacts
