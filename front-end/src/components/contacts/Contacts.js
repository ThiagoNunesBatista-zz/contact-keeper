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
  const { contacts } = context

  return (
    <div>
      {contacts.map(current => <ContactItem contact={current} key={current.id} />
      )}
    </div>
  )
}

export default Contacts
