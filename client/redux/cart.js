import { createSlice } from '@reduxjs/toolkit'
import { updateInCart } from './documents';

const initialState = {
    items: [],  // array of documents
    numItems: 0  // number of documents in cart
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        // no need for addToCart reducer
        // document updateInCart reducer trigger the extraReducers here

        addToCart: (state, action) => {
            // update cart state
                // add to cart list
                // state.items.push(action.payload)
                // increment numCartItems
            console.log('State before:', state.items);
            console.log('Action payload:', action.payload);

            // Add the document to the items array and increment numItems
            const newItems = state.items.slice();
            newItems.push({
                ...action.payload,
                inCart: true,
            });
            state.items = newItems;

            state.numItems++;

            console.log('State after:', state.items);
        }
    },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;