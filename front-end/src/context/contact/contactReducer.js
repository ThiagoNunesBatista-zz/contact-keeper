// Internal Imports
// JavaScript
import {
  ADD_CONTACT,
  CLEAR_ALL,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
  LOAD_CONTACTS
} from '../types'

export default (state, action) => {
  switch (action.type) {
    case LOAD_CONTACTS:
      return {
        ...state,
        contacts: action.payload
      }

    case ADD_CONTACT:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      }

    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(element => {
          return element._id !== action.payload ? element : null
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
        contacts: state.contacts.map(contact => {
          return contact._id === action.payload.outdatedContact._id ? action.payload.updatedContact : contact
        }
        )
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

    case CLEAR_ALL:
      return {
        ...state,
        contacts: []
      }

    default:
      return state
  }
}
