import React from 'react'
import { Link as LinkScroll } from 'react-scroll'
import { Link as LinkRouter } from 'react-router-dom'
import toy from '../../image/toy.png'
import {AiOutlineLogin} from 'react-icons/ai'
import './navBar.css'
// import {FiShoppingCart} from 'react-icons/fi'


const Navbar = () => {
  return (
    <div>
       <div className='items'>
        <img src={toy} alt='toy' className='img'/>
        <div className='nav'>
            <ul>
              <li><LinkScroll className='nav-list' smooth={true} to="products"> Products</LinkScroll></li>
              <li><LinkScroll className='nav-list' smooth={true} to="shop by age"> Shop by age</LinkScroll></li>
              <li><LinkRouter className='nav-list' to='/find'>Find US</LinkRouter></li>
              <li><LinkRouter className='nav-list' to='/store'>Store</LinkRouter></li>
            </ul>
        </div>
        <div className='shop'>
          {/* <span>0</span>
          <LinkRouter className='icons' to='/store'><FiShoppingCart/></LinkRouter> */}
          <LinkRouter className='icons' to='/signup'><AiOutlineLogin size="22px"/></LinkRouter>
        </div>
      </div>
    </div>
  )
}

export default Navbar