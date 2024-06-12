import * as types from '.constants/actionTypes';

const updateLike = data => ({
    type: types.TOGGLE_LIKE,
    payload: data
});

const updateCart = data => ({
    type: types.TOGGLE_CART,
    payload: data
});

export { updateLike, updateCart };