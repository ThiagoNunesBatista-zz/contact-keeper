// External Imports
// JavaScript
import React, { createContext, useReducer } from 'react'
import { v4 as uuid } from 'uuid'

// Internal Imports
// JavaScript
import alertReducer from './alertReducer'
import { SET_ALERT, REMOVE_ALERT } from '../types'

// Create Context
const AlertContext = createContext()

export const AlertContextProvider = props => {
  const initialState = []

  const [state, dispatch] = useReducer(alertReducer, initialState)

  // Set Alert
  const setAlert = (message, type, timeout = 5000) => {

    const id = uuid()
    dispatch({
      type: SET_ALERT,
      payload: {
        message,
        type,
        id
      }
    })

    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout)
  }

  return (
    <AlertContext.Provider
      value={{
        alerts: state,
        setAlert
      }}
    >
      {props.children}
    </AlertContext.Provider>
  )
}

export default AlertContext
