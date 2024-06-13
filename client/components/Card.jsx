import React from 'react';
import { useDispatch } from 'react-redux';

import { updateIsLiked, updateInCart } from '../redux/documents';
import { addToCart } from '../redux/cart';

import likeBtnActive from '../assets/like-btn-active.svg';
import likeBtnInactive from '../assets/like-btn-inactive.svg';
import cartBtnActive from '../assets/cart-btn-active.svg';
import cartBtnInactive from '../assets/cart-btn-inactive.svg';

const Card = ({ elm }) => {
    
    // access action creators
    const dispatch = useDispatch();
    const likeDispatch = () => {
        dispatch(updateIsLiked(elm));
    }
    const cartDispatch = () => {
        dispatch(addToCart(elm));
        dispatch(updateInCart(elm));
    }

    
    let likeBtn, cartBtn;
    likeBtn = elm.isLiked ? likeBtnActive : likeBtnInactive;
    cartBtn = elm.inCart ? cartBtnActive : cartBtnInactive;
    const cardStyle = {
        backgroundColor: elm.value,
    }

    return (
        <div className='card'>
            <div className="card-img" style={cardStyle}>
                
            </div>
            <div className="card-bottom">
                <div className='btn like-btn' onClick={likeDispatch}>
                    <img src={likeBtn} alt="like-button" />
                    {/* <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M27.7782 23.2218L29.1109 21.8891C31.2588 19.7412 34.7412 19.7412 36.8891 21.8891C39.037 24.037 39.037 27.5194 36.8891 29.6673L28.7574 37.799C28.6647 37.8917 28.5583 37.9624 28.4448 38.011L28.435 38.0208C28.0445 38.4113 27.4113 38.4113 27.0208 38.0208L18.8891 29.8891C16.7412 27.7412 16.7412 24.2588 18.8891 22.1109C21.037 19.963 24.5194 19.963 26.6673 22.1109L27.7782 23.2218ZM20.3033 28.4749L27.7782 35.9497L35.4749 28.253C36.8417 26.8862 36.8417 24.6701 35.4749 23.3033C34.108 21.9365 31.892 21.9365 30.5251 23.3033L27.7782 26.0503L25.253 23.5251C23.8862 22.1583 21.6701 22.1583 20.3033 23.5251C18.9365 24.892 18.9365 27.108 20.3033 28.4749Z" fill="black"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 27.5C0 12.3122 12.3122 0 27.5 0C42.6878 0 55 12.3122 55 27.5C55 42.6878 42.6878 55 27.5 55C12.3122 55 0 42.6878 0 27.5ZM27.5 53C13.4167 53 2 41.5833 2 27.5C2 13.4167 13.4167 2 27.5 2C41.5833 2 53 13.4167 53 27.5C53 41.5833 41.5833 53 27.5 53Z" fill="black"/>
                    </svg> */}
                </div>
                <div className='btn cart-btn' onClick={cartDispatch}>
                    <img src={cartBtn} alt="add-to-cart-button" />
                    {/* <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M27 16.4688V37.0938M16.6875 26.7812H37.3125M1.21875 26.7812C1.21875 33.6189 3.93498 40.1764 8.7699 45.0113C13.6048 49.8463 20.1624 52.5625 27 52.5625C33.8376 52.5625 40.3952 49.8463 45.2301 45.0113C50.065 40.1764 52.7812 33.6189 52.7812 26.7812C52.7812 19.9436 50.065 13.3861 45.2301 8.55115C40.3952 3.71623 33.8376 1 27 1C20.1624 1 13.6048 3.71623 8.7699 8.55115C3.93498 13.3861 1.21875 19.9436 1.21875 26.7812Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg> */}
                </div>
            </div>
        </div>
    )
}

export default Card;