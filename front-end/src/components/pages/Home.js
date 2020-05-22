// External Imports
// JavaScript
import React, { useContext, useEffect } from 'react'

// Internal Imports
// JavaScript
import AuthContext from '../../context/auth/AuthContext'
import Contacts from '../contacts/Contacts'
import ContactContext from '../../context/contact/ContactContext'
import ContactFilter from '../contacts/ContactFilter'
import ContactForm from '../contacts/ContactForm'

const Home = () => {
  const authContext = useContext(AuthContext)
  const { loadUser } = authContext

  const contactsContext = useContext(ContactContext)
  const { contacts, loadContacts } = contactsContext

  useEffect(() => {
    loadUser()
    loadContacts()
    // eslint-disable-next-line
  }, [])

  return (
    <div className='grid-2'>
      <div>
        <ContactForm />
      </div>
      <div>
        {contacts !== undefined && contacts !== null && contacts.length > 0 ? <ContactFilter /> : ''}
        <Contacts />
      </div>
    </div>
  )
}

export default Home
