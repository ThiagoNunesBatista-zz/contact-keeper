// Internal Imports
// JavaScript
import { REGISTER_SUCCESS, REGISTER_FAIL, CLEAR_ERRORS } from '../types'

const authReducer = (state, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      window.localStorage.setItem('token', String(action.payload.token))
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false
      }

    case REGISTER_FAIL:
      window.localStorage.removeItem('token')
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        errors: action.payload
      }

    case CLEAR_ERRORS:
      return {
        ...state,
        errors: []
      }

    default:
      return state
  }
}

export default authReducer
