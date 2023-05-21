import React from 'react'
import { Link as LinkRouter } from 'react-router-dom'
import './find.css'

const Find = () => {
  return (
        <div className='find'>
            <form method='POST' action='https://getform.io/f/b3175715-bc85-4927-8cf4-0e10c9a00c0c' className='form'>
                <div className='contact-text'>
                    <p className='p-text'>Contact</p> 
                </div>
                <input className='name' placeholder='Name' name='name'/>
                <input className='email' placeholder='Email' name='email'/>
                <textarea className='text-area' rows="10" placeholder='Message'></textarea>
                <button className='btn'>Let's Collaborate</button>
                <LinkRouter className='icons-home' to='/'>Home</LinkRouter>
            </form>
        </div>
    )
  
}

export default Find