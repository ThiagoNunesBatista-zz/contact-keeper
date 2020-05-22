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
  const context = useContext(ContactContext)
  const authContext = useContext(AuthContext)

  const { loadUser } = authContext

  useEffect(() => {
    loadUser()
    // eslint-disable-next-line
  }, [])

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
