// External Imports
// JavaScript
import React, { useContext, useEffect, useState } from 'react'

// Internal Imports
// JavaScript
import AlertContext from '../../context/alert/AlertContext'
import AuthContext from '../../context/auth/AuthContext'

const Login = props => {
  const authContext = useContext(AuthContext)

  const { errors, clearErrors, isAuthenticated, loginUser } = authContext

  const alertContext = useContext(AlertContext)
  const { setAlert } = alertContext

  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/')
    }
    if (errors !== null && errors !== undefined) {
      if (errors.length > 0) {
        errors.map(current => (
          setAlert(current.msg, 'danger')
        ))
        clearErrors()
      }
    }
    // eslint-disable-next-line
  }, [errors, isAuthenticated, props.history])

  const { email, password } = user

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (email === '' || password === '') {
      setAlert('Please enter all fields', 'danger')
    } else {
      loginUser({ email, password })
    }
  }

  return (
    <div className='form-container'>
      <h1>
        Account <span className='text-primary'>Login</span>
      </h1>

      <form onSubmit={handleSubmit}>

        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' id='email' value={email} onChange={handleChange} />
        </div>

        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input type='password' name='password' id='password' value={password} onChange={handleChange} />
        </div>

        <input type='submit' value='Login' className='btn btn-primary btn-block' />
      </form>
    </div>
  )
}

export default Login
