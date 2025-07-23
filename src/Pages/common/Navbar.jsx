import React from 'react';
import './ProductCard.css';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg d-flex justify-content-left">
        <div className="container-fluid">
          <NavLink className="navbar-brand text-white" to="/">Shopify</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav me-auto">
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">Products</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/categories">Categories</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
              </li>
            </ul>
           
          
            
              <div className={localStorage.getItem('user_token')==undefined ? "d-block":"d-none"}>
               <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  <button className='btn btn-dark btn-sm'>
                    Login
                  </button>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/create_account">
                <button className='btn btn-dark btn-sm'>
                SignUp  
                </button>
                </NavLink>
              </li>
            </ul>
            </div>
            </div>

              <div className={localStorage.getItem('user_token')==undefined ? "d-none":"d-block"}>
               <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                <NavLink className="nav-link" to="/cart">
                  <button className='btn btn-dark btn-sm'>
                  Cart
                  </button>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/profile">
                <button className='btn btn-dark btn-sm'>
                Profile  
                </button>
                </NavLink>
              </li>
            </ul>
            </div>


            </div>
      </nav>
    </>
  );
}

export default Navbar;
