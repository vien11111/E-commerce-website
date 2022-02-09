import { createAsyncThunk } from '@reduxjs/toolkit';
import orderItemApi from 'apis/orderItemApi';
import orderApi from 'apis/orderApi';

export const createOrderItemAsync = createAsyncThunk(
  'create/orderItemApi',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await orderItemApi.add(payload);
      return response;
    } catch (err) {
      return rejectWithValue(err.data);
    }
  }
);

export const createOrderAsync = createAsyncThunk(
  'create/createOrderAsync',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await orderApi.create(payload);
      return response;
    } catch (err) {
      return rejectWithValue(err.data);
    }
  }
);
