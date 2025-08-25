import React, { useContext } from 'react';
import '../Header/Header.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const Header = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className='header'>
      <div className='logo'>
        <img src='/images/logo.png' alt="logo"/>
      </div>
      <div className='menu'>
        <ul>
          <li><Link to='/'> Home</Link></li>
          <li><Link to='/detail'> Products Detail</Link></li>
          <li>About Us</li>
          <li>Support</li>
        </ul>
      </div>
      <div className='icon'>
       <Link to='/cart'> <img src='/icons/cartIcon.png' alt="cart" /> </Link>
        <span>{cart.length}</span> {/* số lượng sản phẩm */}
        <img src='/icons/chatIcon.png' alt="chat"/>
        <h3>Thang</h3>
      </div>
    </div>
  );
};

export default Header;
