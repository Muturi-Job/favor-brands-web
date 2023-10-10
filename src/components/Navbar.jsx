import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import ColoredLogo from '../images/FAVOR BRANDS -COLORED.png'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg   ">
    <NavLink className="navbar-brand m-0 p-0 col-4 d-flex justify-content-center" to="/"><img src={ColoredLogo} alt="" className='navbar-logo' /></NavLink>
    <button className="navbar-toggler mx-5 border-0 " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <svg className='toggler-image' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 50 50">
        <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"></path>
      </svg>
    </button>

    <div className="collapse navbar-collapse col-4 justify-content-center" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto navbar-links text-black ">
        <li className="nav-item text-center">
          <NavLink className="nav-link" to="/">Home</NavLink>
        </li>
        <li className="nav-item text-center">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item text-center">
          <NavLink className="nav-link" to="/products">Products</NavLink>
        </li>
        <li className="nav-item text-center">
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>

    <div className='contact-us-button collapse navbar-collapse  justify-content-center col-4 '>
      <NavLink to='/contact' className='contact-button-link'>
      <button class="contactButton" >
        Get in Touch
        <div class="iconButton">
          <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="white"></path>
          </svg>
        </div>
      </button>
      </NavLink>

    </div>
  </nav>
  );
};

export default Navbar;
