import { createAsyncThunk } from '@reduxjs/toolkit';
import checkoutApi from 'apis/checkoutApi';

export const checkoutAsync = createAsyncThunk(
  'checkout/checkout',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await checkoutApi.checkout(payload);
      return response;
    } catch (err) {
      return rejectWithValue(err.data);
    }
  }
);
