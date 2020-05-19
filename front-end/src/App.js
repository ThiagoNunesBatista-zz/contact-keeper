// External Imports
// JavaScript
import React from 'react'

// Internal Imports
// CSS
import './App.css'

// JavaScript
import { AuthContextProvider } from './context/auth/AuthContext'
import { ContactContextProvider } from './context/contact/ContactContext'
import Routes from './routes'

const App = () => {
  return (
    <AuthContextProvider>
      <ContactContextProvider>
        <Routes />
      </ContactContextProvider>
    </AuthContextProvider>
  )
}

export default App
