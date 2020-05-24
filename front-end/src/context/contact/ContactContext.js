// External Imports
// JavaScript
import axios from 'axios'
import React, { createContext, useReducer } from 'react'

// Internal Imports
// JavaScript
import contactReducer from './contactReducer'
import {
  ADD_CONTACT,
  CLEAR_CURRENT,
  CLEAR_ALL,
  CLEAR_FILTER,
  DELETE_CONTACT,
  FILTER_CONTACTS,
  LOAD_CONTACTS,
  SET_CURRENT,
  UPDATE_CONTACT
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
  // Load Contacts
  const loadContacts = async () => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': window.localStorage.token
      }
    }

    const url = '/contacts'

    try {
      const res = await axios.get(url, null, config)
      dispatch({
        type: LOAD_CONTACTS,
        payload: res.data.contacts
      })
    } catch (error) {
      console.log(error)
    }
  }

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
      console.log(error)
    }
  }

  // Delete Contact
  const deleteContact = async id => {
    const url = `/contacts/${id}`
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': window.localStorage.token
      }
    }

    try {
      await axios.delete(url, id, config)
      dispatch({
        type: DELETE_CONTACT,
        payload: id
      })
    } catch (error) {
      console.log(error)
    }
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

  // Clear All Contacts
  const clearAll = () => {
    dispatch({
      type: CLEAR_ALL
    })
  }

  return (
    <ContactContext.Provider
      value={{
        addContact,
        clearAll,
        clearCurrent,
        clearFilter,
        contacts: state.contacts,
        currentContact: state.currentContact,
        deleteContact,
        filterContacts,
        filtered: state.filtered,
        loadContacts,
        setCurrent,
        updateContact
      }}
    >
      {props.children}
    </ContactContext.Provider>
  )
}

export default ContactContext
