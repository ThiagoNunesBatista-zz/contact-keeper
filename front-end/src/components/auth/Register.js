// External Imports
// JavaScript
import React, { useContext, useEffect, useState } from 'react'

// Internal Imports
// JavaScrit
import AlertContext from '../../context/alert/AlertContext'
import AuthContext from '../../context/auth/AuthContext'

const Register = props => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const alertContext = useContext(AlertContext)
  const { setAlert } = alertContext

  const authContext = useContext(AuthContext)
  const { clearErrors, errors, isAuthenticated, registerUser } = authContext

  const { name, email, password, confirmPassword } = user

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

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

  const handleSubmit = e => {
    e.preventDefault()

    if (name === '' || email === '' || password === '') {
      setAlert('Please enter all fields', 'danger')
    } else if (password !== confirmPassword) {
      setAlert('Passwords Do not Match', 'danger')
    } else if (password.length < 5) {
      setAlert('Password Must Be At Least 5 Characters', 'danger')
    } else {
      registerUser({ name, email, password })
    }
  }

  return (
    <div className='form-container'>
      <h1>
        Account <span className='text-primary'>Register</span>
      </h1>

      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='name'>Name</label>
          <input type='text' name='name' id='name' value={name} onChange={handleChange} />
        </div>

        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' id='email' value={email} onChange={handleChange} />
        </div>

        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input type='password' name='password' id='password' value={password} onChange={handleChange} />
        </div>
        <div className='form-group'>
          <label htmlFor='name'>Confirm Password</label>
          <input type='password' name='confirmPassword' id='confirmPassword' value={confirmPassword} onChange={handleChange} />
        </div>

        <input type='submit' value='Register' className='btn btn-primary btn-block' />
      </form>
    </div>
  )
}

export default Register
