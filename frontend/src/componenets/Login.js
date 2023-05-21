import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate} from 'react-router-dom'
import './LoginValidation'
import Validation from './LoginValidation'
import axios from 'axios'

const Login = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  })

  const navigate =useNavigate();
  const [erros, setErrors] = useState({})

  const handelInput = (e) => {
    setValues(prev => ({...prev, [e.target.name]: [e.target.value]}))
  }
  const handelSubmit = (e) => {
    e.preventDefault()
    setErrors(Validation(values))
      axios.get('http://localhost:8082/login', values)
      .then(res => {
        if(res.data === "Success"){
          navigate('/home')
        } else {
          alert("No Record Existed")
        }
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="container">
      <div className="wrap">
        <form className='form' action='' onSubmit={handelSubmit}>
          <div className='box'>
            <label htmlFor="email">Email</label>
            <input 
            className='input' 
            type="email" 
            name='email'
            placeholder='Enter your Email'
            onChange={handelInput}
            />
            {erros.email && <span className='error'>{erros.email}</span>}
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
          <button type='submit' className="button">Log in</button> 
            <p>You are agree to our policies</p>
          <Link to="/signup" className="button-create">Create an Account</Link>
        </form>
        
      </div>
    </div>
  )
}

export default Login