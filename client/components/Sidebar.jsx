import React from 'react';

const Sidebar = () => {
    // hooks
    const state = useSelector((state) => state);

    const cart = state.cart;
    console.log('cart:', cart);

    return <div class='sidebar'>
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