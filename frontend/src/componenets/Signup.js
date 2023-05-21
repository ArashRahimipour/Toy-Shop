import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Signup.css'
import Validation from './SignupValidation'
import axios from 'axios'

const Signup = () => {

  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
  })

  const navigate =useNavigate();
  const [erros, setErrors] = useState({})

  const handelInput = (e) => {
    setValues(prev => ({...prev, [e.target.name]: [e.target.value]}))
  }
  const handelSubmit = async (e) => {
    e.preventDefault()
    setErrors(Validation(values))
     await axios.post('http://localhost:8082/signup', values)
      .then(res => {
        console.log(res)
        navigate('/')
      })
      .catch(err => console.log(err))
  }
  return (
    <div className="container">
      <div className="wrap-signup">
        <form className='form' action='' onSubmit={handelSubmit}>
          <div className='box'>
              <label htmlFor="Name">Name</label>
              <input 
              className='input-name' 
              type="text" 
              placeholder='Enter your Name'
              name='name'
              onChange={handelInput}
              />
              {erros.name && <span className='error'>{erros.name}</span>}
            </div>
            <div className='box'>
              <label htmlFor="email">Email</label>
              <input 
              className='input' 
              type="email" 
              name='email'
              placeholder='Enter your Email'
              onChange={handelInput}
            />
            {/* {erros.email && <span className='error'>{erros.email}</span>} */}
            </div>
            <div className="box">
              <label htmlFor="password">Password</label>
              <input 
              className='input-pass' 
              name='password'
              type="Password" 
              placeholder='Enter your Password'
              onChange={handelInput}
              />
              {/* {erros.password && <span className='error'>{erros.password}</span>} */}
            </div>
            <button type='submit' className="button">Sign up</button> 
              <p>You are agree to our policies</p>
            <Link to="/login" className="button-create">Login</Link>
        </form> 
      </div>
    </div>
  )
}

export default Signup