// External Imports
// JavaScript
import axios from 'axios'
import React, { createContext, useReducer } from 'react'

// Internal Imports
// JavaScript
import authReducer from './authReducer'
import { REGISTER_SUCCESS, REGISTER_FAIL, CLEAR_ERRORS } from '../types'

// Create Auth Context
const AuthContext = createContext()

export const AuthContextProvider = props => {
  const initialState = {
    token: window.localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    errors: []
  }
  const [state, dispatch] = useReducer(authReducer, initialState)

  // Load User
  const loadUser = () => {
    console.log('loadUser')
  }

  // Register User
  const registerUser = async formData => {
    const url = '/users'
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const res = await axios.post(url, formData, config)
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      })
    } catch (error) {
      let errors

      if (error.response.data.errors) {
        errors = error.response.data.errors
      } else {
        errors = [error.response.data.message]
      }

      dispatch({
        type: REGISTER_FAIL,
        payload: errors
      })
    }
  }

  // Login User
  const loginUser = () => {
    console.log('loginUser')
  }

  // Logout
  const logout = () => {
    console.log('logout')
  }

  // Clear Errors
  const clearErrors = () => {
    dispatch({
      type: CLEAR_ERRORS
    })
  }

  const { errors, isAuthenticated, loading, token, user } = state

  return (
    <AuthContext.Provider
      value={{
        clearErrors,
        errors,
        isAuthenticated,
        loading,
        loadUser,
        loginUser,
        logout,
        registerUser,
        token,
        user
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext
