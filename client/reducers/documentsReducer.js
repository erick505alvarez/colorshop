import React from 'react';
import { useSelector } from 'react-redux';
import * as types from '../constants/actionTypes';

// define documents -- starting with color
    // type: color/font
    // pull from database / api
const colors = ['#003049', '#d62828', '#f77f00', 
    '#fcbf49', '#eae2b7', '#8d99ae', '#81b29a'];

const initialDocs = colors.map((value) => {
    return {
        galleryType: 'color',
        value: value,
        isLiked: false,
        inCart: false,
    }
});

const initialState = {
    docs: initialDocs
}

const documentsReducer = (state = initialState, action) => {
    console.log('initial state:', state);
    switch (action.type) {
        case types.TOGGLE_LIKE:
            console.log('TOGGLE_LIKE');
            return state;
            break;
        
        default:
            return state;
    }
}


export default documentsReducer;