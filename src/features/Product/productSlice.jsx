import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import productApi from 'apis/productApi';
import { isEmpty, keys } from 'lodash';

export const getProduct = createAsyncThunk(
  'get/products',
  async (params, { reject }) => {
    try {
      const response = await productApi.get(params);
      return response;
    } catch (err) {
      return reject(err.data);
    }
  }
);

const initialState = {
  isLoading: false,
  productList: [],
  productCart: JSON.parse(localStorage.getItem('cart') || '{}'),
  isForce: null,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      const { idProductAdd, quantity, product } = action.payload;
      const localProduct = localStorage.getItem('cart');
      if (!localProduct || isEmpty(localProduct)) {
        const formatProduct = { [idProductAdd]: { ...product, quantity } };
        localStorage.setItem('cart', JSON.stringify(formatProduct));
        state.productCart = formatProduct;
      } else {
        const cart = JSON.parse(localStorage.getItem('cart') || '{}');
        const keyCart = keys(cart);
        const includeProduct = keyCart.includes(idProductAdd);
        if (includeProduct) {
          cart[idProductAdd].quantity += quantity;
          localStorage.setItem('cart', JSON.stringify(cart));
        } else {
          const CART = JSON.parse(localStorage.getItem('cart'));
          const newProductToList = {
            ...CART,
            [idProductAdd]: { ...product, quantity },
          };
          localStorage.setItem('cart', JSON.stringify(newProductToList));
        }
        state.productCart = cart;
        state.isForce = Date.now();
      }
    },

    deleteProduct: (state, action) => {
      const { idProductAdd } = action.payload;
      const localProduct = localStorage.getItem('cart');
      if (!localProduct || isEmpty(localProduct)) {
        // convert to key by id
        return;
      } else {
        const cart = JSON.parse(localStorage.getItem('cart') || '{}');
        const keyCart = keys(cart);
        const includeProduct = keyCart.includes(idProductAdd);
        if (includeProduct) {
          delete cart[idProductAdd];
          localStorage.setItem('cart', JSON.stringify(cart));
        } else {
          return;
        }
        state.productCart = cart;
        state.isForce = Date.now();
      }
    },
    
    onForce : (state, action) => {
      state.isForce = Date.now();
    }
  },
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

export const { reducer: productReducer } = productSlice;
export const { onForce ,addProductToCart, deleteProduct } = productSlice.actions;

export default productReducer;
