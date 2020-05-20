// External Imports
// JavaScript
import React, { useState } from 'react'

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const { email, password } = user

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log('Submit Form')
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
