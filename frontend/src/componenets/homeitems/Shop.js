import React from 'react'
import './shop.css'
import Item from './Item'
import { Link as LinkRouter } from 'react-router-dom'

const About = () => {
  return (
    <div className='box'>
      <ul className='ul_shop'>
        <li><LinkRouter className='list' to='/store'>Shop by age</LinkRouter></li>
      </ul>
      <div className='about'>
         {Item.map((item) => (
          <div className='shop_age' key={item.id}>
            <img src={item.img} alt='child' width="150px" height="150px"/>
            <p>{item.desc}</p>
          </div>
          ))}
      </div>
    </div>
  )
}

export default About