import React from 'react';
import { useSelector } from 'react-redux';

import * as types from '../constants/actionTypes';

const initialState = {
    items: [],  // array of documents
    numItems: 0  // number of documents in cart
}

const cartReducer = (state = initialState, action) => {
    switch (action.types){
        case types.TOGGLE_CART:
                console.log('TOGGLE_CART')
                return state;
                break;
        default:
            return state
        }
}

export default cartReducer;