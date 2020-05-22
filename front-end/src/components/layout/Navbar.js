// External Imports
// JavaScript
import PropTypes from 'prop-types'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

// Internal Imports
// JavaScript
import AuthContext from '../../context/auth/AuthContext'

const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext)

  const { isAuthenticated, logout, user } = authContext

  const handleLogout = () => {
    logout()
  }

  // Internal Components
  const authLinks = (
    <>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/about'>About</Link>
      </li>
      <li>Hello {user && user.name}</li>
      <li onClick={handleLogout}>
        <a href='#!'>
          <i className='fas fa-sign-out-alt' />
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </>
  )

  const guestLinks = (
    <>
      <li>
        <Link to='/register'>Register</Link>
      </li>

      <li>
        <Link to='/login'>Login</Link>
      </li>
    </>
  )

  return (
    <nav className='navbar bg-primary'>
      <h1><i className={icon} /> {title}</h1>

      <ul>
        {isAuthenticated ? authLinks : guestLinks}
      </ul>
    </nav>
  )
}

Navbar.defaultProps = {
  title: 'Contact Keeper',
  icon: 'fas fa-id-card-alt'
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}

export default Navbar
