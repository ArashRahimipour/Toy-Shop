import React from 'react'
import './home.css'
import Navbar from './homeitems/Navbar'
import Products from './products/Products'
import Shop from './homeitems/Shop'
import Contact from './homeitems/Contact'


const Home = () => {
  return (
    <>
    <div className='nav-manage'>
      <h3>Welcome To Toy Shop</h3>
      <Navbar/>
    </div>
    <Products/>
    <Shop/>
    <Contact/>
    </>
  )
}

export default Home