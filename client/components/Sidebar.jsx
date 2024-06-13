import React from 'react';
import { useSelector } from 'react-redux';

import cartSvg from './../assets/cart.svg'

const Sidebar = () => {
    // hooks
    const cart = useSelector((state) => state.cart);

    return <div className='sidebar'>
        <div className="top">
            <h1 className='logo'>ColorShop</h1>
            <div className='cart-icon-container'>
                <img src={cartSvg} alt="cart" />
                {/* below does not work bc the path is resolved in the browser, not during webpack build */}
                {/* <img src='./client/assets/cart.svg"' alt="cart" /> */}
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