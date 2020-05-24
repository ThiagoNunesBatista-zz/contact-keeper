// External Imports
// JavaScript
import React from 'react'

// Internal Imports
// CSS
import './App.css'

// JavaScript
import { AlertContextProvider } from './context/alert/AlertContext'
import { AuthContextProvider } from './context/auth/AuthContext'
import { ContactContextProvider } from './context/contact/ContactContext'
import Routes from './routes'

const App = () => {
  return (
    <AuthContextProvider>
      <AlertContextProvider>
        <ContactContextProvider>
          <Routes />
        </ContactContextProvider>
      </AlertContextProvider>
    </AuthContextProvider>
  )
}

export default App
