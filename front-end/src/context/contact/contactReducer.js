// Internal Imports
// JavaScript
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from '../types'

export default (state, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      }

    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(element => {
          return element._id !== action.payload
        })
      }

    case SET_CURRENT:
      return {
        ...state,
        currentContact: action.payload
      }

    case CLEAR_CURRENT:
      return {
        ...state,
        currentContact: null
      }

    case UPDATE_CONTACT:
      return {
        ...state,
        currentContact: null,
        contacts: state.contacts.map(contact => contact._id === action.payload.outdatedContact._id ? action.payload.updatedContact : contact)
      }

    case FILTER_CONTACTS:
      return {
        ...state,
        filtered: state.contacts.filter(contact => {
          const regex = new RegExp(`${action.payload}`, 'gi')
          return contact.name.match(regex)
        })
      }

    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null
      }

    default:
      return state
  }
}
