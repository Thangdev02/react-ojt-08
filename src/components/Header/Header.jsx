import React from 'react';
import '../Header/Header.css'

const Header = () => {
    return (
        <div className='header'>
            {/* chia bao nhieu phan - phan nao co cai gi */}
            <div className='logo'>
                <img src='/images/logo.png'/>
            </div>
            <div className='menu'>
                <ul>
                    <li>Home</li>
                    <li>Products</li>
                    <li>About Us</li>
                    <li>Support</li>
                </ul>
            </div>
            <div className='icon'>
                <img src='/icons/cartIcon.png'/>
                <img src='/icons/chatIcon.png'/>
            </div>
        </div>
    );
};

export default Header;