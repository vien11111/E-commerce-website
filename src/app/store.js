import { configureStore } from '@reduxjs/toolkit';
import productReducer from 'features/FemaleProduct/homeSlice';
import auth from 'features/Auth/authSlice';
import product from 'features/Product/productSlice';
import loadingGlobal from 'features/loadingSlice';

export const store = configureStore({
  reducer: {
    productReducer,
    auth,
    product,
    loadingGlobal,
  },
});
