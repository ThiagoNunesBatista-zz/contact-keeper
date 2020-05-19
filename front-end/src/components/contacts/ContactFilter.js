// External Imports
// JavaScript
import React, { useContext, useEffect, useRef } from 'react'

// Internal Imports
// JavaScript
import ContactContext from '../../context/contact/ContactContext'

const ContactFilter = () => {
  const context = useContext(ContactContext)

  const text = useRef('')

  const { clearFilter, filterContacts, filtered } = context

  useEffect(() => {
    if (filtered === null) {
      text.current.value = ''
    }
  }, [filtered])

  const handleFilter = e => {
    if (text.current.value !== '') {
      filterContacts(e.target.value)
    } else {
      clearFilter()
    }
  }

  return (
    <form>
      <input type='text' ref={text} placeholder='Search Contacts' onChange={handleFilter} />
    </form>
  )
}

export default ContactFilter
