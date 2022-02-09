import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { productApi } from 'apis/product';

export const getProduct = createAsyncThunk(
    'get/products',
    async(params, { rejectWithValue }) => {
        try {
            const response = await productApi.getAll(params);
            return response;
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);

const initialState = {
    isLoading: false,
    productList: [],
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: {
        [getProduct.pending]: (state) => {
            state.isLoading = true;
        },
        [getProduct.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.productList = action.payload.results;
        },
        [getProduct.rejected]: (state) => {
            state.isLoading = false;
        },
    },
});

// export const {} = homeSlice.actions

export default productSlice.reducer;