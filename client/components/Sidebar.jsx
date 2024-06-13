import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import cartSvg from './../assets/cart.svg'

const Sidebar = () => {
    // hooks
    const numItems = useSelector((state) => state.cart.numItems);
    const dispatch = useDispatch();

    // Animation effect for shopping icon
    useEffect(() => {
        if (numItems > 0) {
            const icon = document.querySelector('.shopping-count-icon');
            if (icon) {
                icon.classList.add('jump-animation');
                setTimeout(() => {
                    icon.classList.remove('jump-animation');
                }, 500)
            }
        }
    }), [numItems];

    return <div className='sidebar'>
        <div className="top">
            <h1 className='logo'>ColorShop</h1>
            <div className='cart-icon-container'>
                {numItems !==0 && (
                    <div className={`shopping-count-icon${numItems === 0 ? ' hide' : ''}`}>
                        {numItems}
                        {/* {2} */}
                    </div>
                )}
                <img src={cartSvg} alt="cart" className='cart-icon'/>
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