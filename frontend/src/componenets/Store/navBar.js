import React from "react";
import { Link as LinkRouter } from 'react-router-dom'
import {FaShoppingCart} from 'react-icons/fa'
import './navBar.css'

const navBar = ({ setShow, size }) => {
  return (
    <nav>
      <div className="nav_box">
        <span className="my_shop" onClick={() => setShow(true)}>
          Toy Shoping
        </span>
        <div className="cart" onClick={() => setShow(false)}>
          <span>
            <FaShoppingCart size={20}/>
          </span>
          <span>{size}</span>
          <LinkRouter className='icons-home' to='/'>Home</LinkRouter>
        </div>
      </div>
    </nav>
  );
};

export default navBar;