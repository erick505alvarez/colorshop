import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// const colors = ['#003049', '#d62828', '#f77f00', 
//     '#fcbf49', '#eae2b7', '#8d99ae', '#81b29a'];

// initialize colors / fonts via API
// function fetchColors(numColors) {
//     const url = 'https://x-colors.yurace.pro/api/random/?number=';
//     fetch(url + `${numColors}`)
//         .then(res => {
//             if (!res.ok) throw Error('Error fetching colors: ', res.responseText);
//             return res.json();
//         })
//         .then(data => {
//             const colors = data.map(color => color.hex);
//             return colors;
//         })
//         .catch(err => {
//             console.error('Error with fetch operator:', err);
//         });
// }

// const NUM_COLORS = 50;
// const colors = fetchColors(NUM_COLORS);

const url = 'https://x-colors.yurace.pro/api/random/?number=';

// create async thunk
export const fetchColors = createAsyncThunk(
    'documents/fetchColors',
    async (numColors) => {
        const res = await fetch(url + `${numColors}`);
        const data = await res.json();
        const colors = data.map(color => color.hex);
        return colors;  // will be the payload of fulfilled aciton
    }
)

// const initialDocs = colors.map((value) => {
//     return {
//         elmId: crypto.randomUUID(),
//         galleryType: 'color',
//         value: value,
//         isLiked: false,
//         inCart: false,
//     }
// });

export const documentSlice = createSlice({
    name: 'documents',
    initialState: {
        docs: [],
        status: 'idle',
        error: null,
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
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchColors.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchColors.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.docs = action.payload.map((color) => ({
                    elmIId: crypto.randomUUID(),
                    galleryType: 'color',
                    value: color,
                    isLiked: false,
                    inCart: false
                }));
            })
            .addCase(fetchColors.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export const { updateIsLiked, updateInCart } = documentSlice.actions;

export default documentSlice.reducer;