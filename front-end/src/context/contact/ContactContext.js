// External Imports
// JavaScript
import axios from 'axios'
import React, { createContext, useReducer } from 'react'

// Internal Imports
// JavaScript
import AuthContext from '../../context/auth/AuthContext'
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
    currentContact: null,
    filtered: null,
    contacts: []
  }

  const [state, dispatch] = useReducer(contactReducer, initialState)

  // THE ACTIONS
  // Add Contact
  const addContact = async contact => {
    const url = '/contacts'
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': window.localStorage.token
      }
    }

    try {
      const res = await axios.post(url, contact, config)
      dispatch({
        type: ADD_CONTACT,
        payload: res.data.contact
      })
    } catch (error) {
      console.log('ERRÃO')
    }
  }

  // Delete Contact
  const deleteContact = id => {
    dispatch({
      type: DELETE_CONTACT,
      payload: id
    })
  }

  // Set Current Contact
  const setCurrent = contact => {
    dispatch({
      type: SET_CURRENT,
      payload: contact
    })
  }

  // Clear Current Contact
  const clearCurrent = () => {
    dispatch({
      type: CLEAR_CURRENT
    })
  }

  // Update Contact
  const updateContact = async contact => {

    const url = '/contacts'

    const config = {
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': window.localStorage.token
      }
    }

    try {
      const res = await axios.post(url, contact, config)
      dispatch({
        type: UPDATE_CONTACT,
        payload: { outdatedContact: contact, updatedContact: res.data.contact }
      })
    } catch (error) {
      console.log('ERRÃO')
      console.log(error)
    }
  }

  // Filter Contacts
  const filterContacts = (text) => {
    dispatch({
      type: FILTER_CONTACTS,
      payload: text
    })
  }

  // Clear Filter
  const clearFilter = () => {
    dispatch({
      type: CLEAR_FILTER
    })
  }

  return (
    <ContactContext.Provider
      value={{
        addContact,
        clearCurrent,
        clearFilter,
        contacts: state.contacts,
        currentContact: state.currentContact,
        deleteContact,
        filterContacts,
        filtered: state.filtered,
        setCurrent,
        updateContact
      }}
    >
      {props.children}
    </ContactContext.Provider>
  )
}

export default ContactContext
