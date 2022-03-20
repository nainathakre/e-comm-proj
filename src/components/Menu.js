import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Menu() {
  const navigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.removeItem('isLoggedIn');
    navigate('/login');
  }
  return (
    <div className="menu-container">
      <ul className="left-side-menu">
        <ul>
          <li>
            <img
              src="https://raw.githubusercontent.com/gautam-in/shopping-cart-assignment/master/static/images/logo.png"
              alt="Sabka Bazaar Logo"
              className="logo"
            />
          </li>
        </ul>
        <ul className="left-side-menu-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </ul>

      <ul className="right-side-menu">
        <ul className="right-side-menu-links">
          {sessionStorage.getItem('isLoggedIn') !== 'true' && (<li>
            <Link to="/login">Sign In</Link>
          </li>)}
          {sessionStorage.getItem('isLoggedIn') !== 'true' && (<li>
            <Link to="/register">Register</Link>
          </li>)}
          {sessionStorage.getItem('isLoggedIn') == 'true' && (<li>
            <a href="javascript:void(0)" onClick={handleLogout}>Log out</a>
          </li>)}
        </ul>
        <ul>
          <li className="right-side-menu-cart-info">
            <img
              src="https://raw.githubusercontent.com/gautam-in/shopping-cart-assignment/master/static/images/cart.svg"
              alt="cart icon"
              className="cart-icon"
            />{' '}
            0 items
          </li>
        </ul>
      </ul>
    </div>
  );
}

export default Menu;
