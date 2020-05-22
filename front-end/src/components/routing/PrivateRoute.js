// External Imports
// JavaScript
import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router-dom'

// Internal Imports
// JavaScript
import AuthContext from '../../context/auth/AuthContext'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const authContext = useContext(AuthContext)
  const { isAuthenticated, loading } = authContext
  return (
    <Route
      {...rest} render={props => !isAuthenticated && !loading ? (
        <Redirect to='/login' />
      ) : (<Component {...props} />)}
    />
  )
}

export default PrivateRoute
