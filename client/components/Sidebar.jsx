import React from 'react';
import { useSelector } from 'react-redux';

const Sidebar = () => {
    // hooks
    const cart = useSelector((state) => state.cart);
    
    console.log('cart:', cart);

    return <div className='sidebar'>
        <div className="top">
            <h1>ColorShop</h1>
            <div className='cart-icon-container'>
                CART-IMG
            </div>
        </div>
        <div className="bottom">
            <div className="profile-icon-container">
                PROFILE-IMG
            </div>
        </div>
    </div>
}

export default Sidebar;