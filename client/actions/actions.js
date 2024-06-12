import * as types from '.constants/actionTypes';

const updateIsLiked = data => ({
    type: types.TOGGLE_LIKE,
    payload: data
});

const updatedInCart = data => ({
    type: types.TOGGLE_CART,
    payload: data
});

const addToCart = data => ({
    type: types.ADD_TO_CART,
    payload: data,
});

export { updateIsLiked, updatedInCart, addToCart };