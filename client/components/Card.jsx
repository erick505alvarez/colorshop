import React from 'react';

const Card = ({ elm }) => {
    return (
        <div className='card'>
            <div className="card-img"></div>
            <button className='like-btn'></button>
            <button className='cart-btn'></button>
        </div>
    )
}

export default Card;