// External Imports
// JavaScript
import React, { createContext, useReducer } from 'react'

// Internal Imports
// JavaScript
import authReducer from './authReducer'

// Create Auth Context
const AuthContext = createContext()

export const AuthContextProvider = props => {
  const initialState = {
    token: window.localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    error: null
  }
  const [state, dispatch] = useReducer(authReducer, initialState)

  // Load User

  // Register User

  // Login User

  // Logout

  // Clear Errors

  const { error, isAuthenticated, loading, token, user } = state

  return (
    <AuthContext.Provider
      value={{
        token,
        isAuthenticated,
        loading,
        user,
        error
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext
