// External Modules
// JavaScript
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Internal Modules
// JavaScript
import About from './components/pages/About'
import Alerts from './components/layout/Alerts'
import Home from './components/pages/Home'
import Login from './components/auth/Login'
import Navbar from './components/layout/Navbar'
import PrivateRoute from './components/routing/PrivateRoute'
import Register from './components/auth/Register'

const Routes = () => {
  return (
    <Router>
      <Navbar />
      <div className='container'>
        <Alerts />
        <Switch>
          <Route exact path='/about' component={About} />
          <PrivateRoute exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />

        </Switch>
      </div>
    </Router>
  )
}

export default Routes
