// External Imports
// JavaScript
import React from 'react'

// Internal Imports
// CSS
import './App.css'

// JavaScript
import { ContactContextProvider } from './context/contact/ContactContext'
import Routes from './routes'

const App = () => {
  return (
    <ContactContextProvider>
      <Routes />
    </ContactContextProvider>
  )
}

export default App
