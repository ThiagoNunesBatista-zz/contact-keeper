// External Modules
// JavaScript
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Internal Modules
// JavaScript
import About from './components/pages/About'
import Home from './components/pages/Home'
import Navbar from './components/layout/Navbar'

const Routes = () => {
  return (
    <Router>
      <Navbar />
      <div className='container'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
        </Switch>
      </div>
    </Router>
  )
}

export default Routes
