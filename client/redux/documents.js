import { createSlice } from "@reduxjs/toolkit";

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

export const documentSlice = createSlice({
    name: 'documents',
    initialState: {
        docs: initialDocs,
    },
    reducers: {
        updateIsLiked: (state, action) => {
            console.log('updateIsLiked Reducer');
            console.log('state:', state);
            console.log('action:', action);

            // update document isLiked variablee
                // toggle true/false
        },

        updateInCart: (state, action) => {
            console.log('updateInCart Reducer');
            console.log('state:', state);
            console.log('action:', action);

            // update document inCart variable
                // toggle true/false
        }
    }
});

export const { updateIsLiked, updateInCart } = documentSlice.actions;

export default documentSlice.reducer;