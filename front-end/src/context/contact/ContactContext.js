// External Imports
// JavaScript
import React, { createContext, useReducer } from 'react'
import uuid from 'uuid'

// Internal Imports
// JavaScript
import contactReducer from './contactReducer'
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from '../types'

// Create Context To Be The Exported Default
const ContactContext = createContext()

// Provider -> Contains All States and Actions
export const ContactContextProvider = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Thiago Nunes Batista',
        phone: '111-111-1111',
        type: 'personal'
      },

      {
        id: 2,
        name: 'John Doe',
        phone: '222-222-2222',
        type: 'personal'
      },
      {
        id: 3,
        name: 'Jane Doe',
        phone: '333-333-3333',
        type: 'personal'
      }

    ]
  }

  const [state, dispatch] = useReducer(contactReducer, initialState)

  // THE ACTIONS
  // Add Contact

  // Delete Contact

  // Set Current Contact

  // Clear Current Contact

  // Update Contact

  // Filter Contacts

  // Clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts
      }}
    >
      {props.children}
    </ContactContext.Provider>
  )
}

export default ContactContext
