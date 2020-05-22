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

  if (contacts !== undefined && contacts.length === 0) {
    return <h3>Add a Contact First</h3>
  }

  return (
    <>
      {filtered !== null && filtered !== undefined && filtered.length > 0 ? filtered.map(current => <ContactItem contact={current} key={current._id} />) : contacts.map(current => <ContactItem contact={current} key={current._id} />
      )}
    </>
  )
}

export default Contacts
