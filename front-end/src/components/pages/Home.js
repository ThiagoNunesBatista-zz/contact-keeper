// External Imports
// JavaScript
import React, { useContext } from 'react'

// Internal Imports
// JavaScript
import Contacts from '../contacts/Contacts'
import ContactContext from '../../context/contact/ContactContext'
import ContactFilter from '../contacts/ContactFilter'
import ContactForm from '../contacts/ContactForm'

const Home = () => {
  const context = useContext(ContactContext)
  const { contacts } = context
  return (
    <div className='grid-2'>
      <div>
        <ContactForm />
      </div>
      <div>
        {contacts !== undefined && contacts.length > 0 ? <ContactFilter /> : ''}
        <Contacts />
      </div>
    </div>
  )
}

export default Home
