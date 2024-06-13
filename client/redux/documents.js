import { createSlice } from "@reduxjs/toolkit";

const colors = ['#003049', '#d62828', '#f77f00', 
    '#fcbf49', '#eae2b7', '#8d99ae', '#81b29a'];

const initialDocs = colors.map((value) => {
    return {
        elmId: crypto.randomUUID(),
        galleryType: 'color',
        value: value,
        isLiked: false,
        inCart: false,
    }
});

export const documentSlice = createSlice({
    name: 'documents',
    initialState: {
        docs: initialDocs,
    },
    reducers: {
        updateIsLiked: (state, action) => {
            // update document isLiked variable
                // toggle true/false
            // console.log('updateIsLiked Reducer');

            const doc = state.docs.find(doc => doc.elmId === action.payload.elmId);
            if (doc) {
                doc.isLiked = !doc.isLiked;
            }
        },
        updateInCart: (state, action) => {
            // update document inCart variable
                // toggle true/false
            // console.log('updateInCart Reducer');
            const doc = state.docs.find(doc => doc.elmId === action.payload.elmId);
            if (doc) {
                doc.inCart = !doc.inCart;
            }
        }
    }
});

export const { updateIsLiked, updateInCart } = documentSlice.actions;

export default documentSlice.reducer;