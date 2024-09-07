import React, { useState } from 'react'
import './Header.css'
import logo from './img/supercart-removebg-preview.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons'
import RegisterModal from '../RegisterModal';
import LoginModal from '../LoginModal';
import { useCart } from '../Store/CartProvider';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';


export const login = () => {
  return (
    <div>Header</div>
  )
}

// import './Header.css'
const Header = () => {
  const [ShowRegisterModal, setShowRegisterModal] = useState(false)
  const [ShowLoginModal, setShowLoginModal] = useState(false)
  const {fetchData}=useCart()
  
  const [LoggedUser, setLoggedUser] = useState(Cookies.get('LoggedUser'))
 
 
  return (
    <header className="row">
      <div style={{ padding: '0 0' }}></div>
      <div className="pad bg-dark col-12">
        {/* First Part: Logo, Search Box, Cart, Login Button */}
        <div className="row align-items-center text-white">
          <div className="col-md-auto">
            <img src={logo} alt="Logo" style={{ height: '40px' }} />
          </div>
          <div className="col-md">
            <form className="d-flex">
              <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
              <button style={{ backgroundColor: '#e3d242' }} className="btn btn-outline-light bt" type="submit">
                Search
              </button>
            </form>
          </div>
          <div className="col-md-auto">
            <Link to="/cart" className="text-decoration-none text-white" aria-label="cart">
              <FontAwesomeIcon icon={faCartShopping} ></FontAwesomeIcon>
            </Link>
          </div>
          {!LoggedUser &&  <div className="col-md-auto">
            <button
              type="button"
              style={{ backgroundColor: '#e3d242' }}
              onClick={() => setShowLoginModal(true)}
              className="btn btn-outline-light bt"    >
              Login
            </button>
          </div>}
         {!LoggedUser && <div className="col-md-auto">
            <button
              type="button"
              style={{ backgroundColor: '#e3d242' }}
              onClick={() => { setShowRegisterModal(true) }}
              className="btn btn-outline-light bt"
            >
              Register
            </button>
          </div>}
          {LoggedUser && <div  className="col-md-auto"><div > <FontAwesomeIcon icon={faUser} size="lg" /> {LoggedUser}</div></div> }
          {LoggedUser &&  <div className="col-md-auto">
            <button
              type="button"
              style={{ backgroundColor: '#e3d242' }}
              onClick={() => { Cookies.remove('LoggedUser');setLoggedUser(undefined)}}
              className="btn btn-outline-light bt">
              Logout
            </button>
          </div>}
        </div>
      </div>
      {ShowRegisterModal && <RegisterModal  closeModal={() => { setShowRegisterModal(false) }}></RegisterModal>}
      {ShowLoginModal && <LoginModal closeModal={() => {setShowLoginModal(false);setLoggedUser(Cookies.get('LoggedUser'))}}></LoginModal>}
      <div className="row bgcolor">
        {/* Second Part: Navigation Bar */}
        <div>
          <nav className="navbar navbar-expand-lg navbar-expand-md navbar-expand-sm navbar-expand">
            <div className="container-fluid">
              <button
                style={{ position: 'fixed', top: '10px', right: '10px' }}
                className="navbar-toggle navbar-toggler clr d-block d-sm-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
                <ul className="navbar-nav fw-bold clr w-100 justify-content-evenly flex-wrap">
                  <li className="nav-item px-3">
                    <Link className="nav-link" to="/home">Home</Link>
                  </li>
                  <li className="nav-item px-3">
                    <Link className="nav-link" to="/allProduct" onClick={() => {fetchData({})}}>All product</Link>
                  </li>
                  <li className="nav-item px-3 dropdown">
                    <Link className="nav-link dropdown-toggle" to="#woman" id="navbarDropdownMenuLink1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Women
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink1">
                      <li><Link className="dropdown-item" to="/allProduct"onClick={() => {fetchData({ "wear_categories": "women"})}}>All product</Link></li>
                      <li><Link className="dropdown-item" to="/allProduct"onClick={() => {fetchData({"product_categories":"Dress", "wear_categories": "women"})}}>Dresses</Link></li>
                      <li><Link className="dropdown-item" to="/allProduct"onClick={() => {fetchData({"product_categories":"Sarees", "wear_categories": "women"})}}>Sarees</Link></li>
                      <li><Link className="dropdown-item" to="/allProduct"onClick={() => {fetchData({"product_categories":"Skirts", "wear_categories": "women"})}}>Skirts</Link></li>
                    </ul>
                  </li>
                  <li className="nav-item px-3 dropdown">
                    <Link className="nav-link dropdown-toggle" to="#men" id="navbarDropdownMenuLink2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Men
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink2">
                      <li><Link className="dropdown-item" to="/allProduct"onClick={() => {fetchData({"wear_categories": "men"})}}>All product</Link></li>
                      <li><Link className="dropdown-item" to="/allProduct"onClick={() => {fetchData({"product_categories":"Shirts", "wear_categories": "men"})}}>Shirts</Link></li>
                      <li><Link className="dropdown-item" to="/allProduct"onClick={() => {fetchData({"product_categories":"Dress", "wear_categories": "men"})}}>Pants</Link></li>
                      <li><Link className="dropdown-item" to="/allProduct"onClick={() => {fetchData({"product_categories":"Dress", "wear_categories": "men"})}}>Hoodies</Link></li>
                    </ul>
                  </li>
                  <li className="nav-item px-3">
                    <Link className="nav-link" to="/allProduct"onClick={() => {fetchData({ "wear_categories": "kid"})}}>Kids</Link>
                  </li>
                  <li className="nav-item px-3">
                    <Link className="nav-link" to="/allProduct">contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header