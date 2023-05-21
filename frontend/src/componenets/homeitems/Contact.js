import React from 'react'
import { Link as LinkRouter } from 'react-router-dom'
import {BsFacebook} from 'react-icons/bs';
import {FaInstagramSquare} from 'react-icons/fa';
import {AiFillLinkedin} from 'react-icons/ai';
import './contact.css'

const Contact = () => {

return(
  <div className='footer'>
    <div className='bottom'>
    <div className='details'>
      <ul>
        <li><a href='/'>Location</a></li>
        <li><a href='/'>Membership</a></li>
        <li><a href='/'>New Offers</a></li>
        <li><a href='/'>Policy</a></li>
      </ul>
    </div>

    <div className='details'>
      <ul>
        <li><a href='/'>Brand new toys</a></li>
        <li><a href='/'>New electric toys</a></li>
        <li><a href='/'>Family hub</a></li>
        <li><a href='/'>Luxury hub</a></li>
      </ul>
    </div>

    <div className='details'>
      <ul>
        <li><a href='/'>Terms & Conditions</a></li>
        <li><LinkRouter className='contact' to='/find'> Find US</LinkRouter></li>
        <li><a href='/'>About Us</a></li>
        <li><a href='/'>Careers</a></li>
      </ul>
    </div>
    </div>
    

    <div className='social'>
        <BsFacebook />
        <FaInstagramSquare />
        <AiFillLinkedin />
    </div>
  </div>
  
 
)
 }

export default Contact