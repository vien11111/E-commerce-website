import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
};

export const loadingSlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    showLoading: (state) => {
      state.isLoading = true;
    },
    hiddenLoading: (state) => {
      state.isLoading = false;
    },
  },
  extraReducers: {},
});

export const { showLoading, hiddenLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
