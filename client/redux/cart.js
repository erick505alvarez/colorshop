import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],  // array of documents
    numItems: 0  // number of documents in cart
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addToCart: (state, action) => {
            console.log('addToCart Reducer');
            console.log('state:', state);
            console.log('action:', action);
            // update cart state
                // add to cart list
                // state.items.push(action.payload)
                // increment numCartItems
                state.numItems++;
        }
    }
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;