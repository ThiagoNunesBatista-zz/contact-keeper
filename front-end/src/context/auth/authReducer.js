// Internal Imports
// JavaScript
import { AUTH_ERROR, CLEAR_ERRORS, REGISTER_FAIL, REGISTER_SUCCESS, USER_LOADED, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from '../types'

const authReducer = (state, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      window.localStorage.setItem('token', String(action.payload.token))
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        loading: false
      }

    case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT:
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
        errors: null
      }

    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload
      }

    default:
      return state
  }
}

export default authReducer
