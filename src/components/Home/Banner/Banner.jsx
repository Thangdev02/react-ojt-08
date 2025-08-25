import React from 'react';
import '../Banner/Banner.css'
const Banner = () => {
    return (
        <div className='container'>
            <div className='banner'>
                {/* co bao nhieu phan: 2 phan, phan ben trai la co 3 phan nho(phan chu, phan button, phan icon), phan ben phai co cai hinh */}
                <div className='left-content'>
                    <div className='row1'>
                        <h1>Handcrafted with <br/> <span className='yellow-text'>Love</span> & <span className='green-text'>Nature</span></h1>
                        <p>Each piece of pottery is uniquely crafted by skilled artisans, bringing the beauty of nature into your home.</p>
                    </div>
                    <div className='row2'>
                        <button className='explore'>Explore Our Collection →</button>
                        <button>VR Technology</button>
                    </div>
                    <div className='row3'>
                        <div className='icon-handmade'>
                            <img src='/icons/cartIcon.png' />
                            <p>Handmade</p>
                        </div>
                        <div className='icon-unique'>
                            <img src='/icons/chatIcon.png' />
                            <p>Unique</p>
                        </div>
                    </div>
                </div>
                <div className='right-content'>
                    <img src='/images/banner.png' />
                </div>
            </div>
        </div>
    );
};

export default Banner;