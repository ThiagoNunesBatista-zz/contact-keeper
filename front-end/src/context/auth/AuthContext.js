// External Imports
// JavaScript
import axios from 'axios'
import React, { createContext, useReducer } from 'react'

// Internal Imports
// JavaScript
import authReducer from './authReducer'
import { AUTH_ERROR, CLEAR_ERRORS, LOGIN_SUCCESS, REGISTER_FAIL, REGISTER_SUCCESS, USER_LOADED, LOGIN_FAIL, LOGOUT } from '../types'
import setAuthToken from '../../utils/setAuthToken'

// Create Auth Context
const AuthContext = createContext()

export const AuthContextProvider = props => {
  const initialState = {
    token: window.localStorage.getItem('token'),
    isAuthenticated: false,
    loading: true,
    errors: null,
    user: null
  }
  const [state, dispatch] = useReducer(authReducer, initialState)

  // Load User
  const loadUser = async () => {
    if (window.localStorage.token) {
      setAuthToken(window.localStorage.token)
    }

    const url = '/auth'

    try {
      const res = await axios.get(url)

      dispatch({
        type: USER_LOADED,
        payload: res.data.user
      })
    } catch (error) {
      dispatch({ type: AUTH_ERROR })
    }
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
      loadUser()
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
  const loginUser = async formData => {
    const url = '/auth'
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const res = await axios.post(url, formData, config)
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      })

      loadUser()
    } catch (error) {
      const errors = error.response.data.errors
      dispatch({
        type: LOGIN_FAIL,
        payload: errors
      })
    }
  }

  // Logout
  const logout = () => {
    dispatch({
      type: LOGOUT
    })
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
