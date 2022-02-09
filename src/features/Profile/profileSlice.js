import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { profileApi } from 'apis/profile';
import orderApi from 'apis/orderApi';

export const updateProfile = createAsyncThunk(
  'update/profile',
  async (payload) => {
    const response = await profileApi.update(payload);
    return response;
  }
);


export const getOrderAsync = createAsyncThunk(
  'update/profile',
  async (params) => {
    const response = await orderApi.getByOwner(params);
    return response;
  }
);
