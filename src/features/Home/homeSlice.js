import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { profileApi } from 'apis/profile';
import { productApi } from 'apis/product';

export const getProduct = createAsyncThunk('get/products', async (payload) => {
  const response = await profileApi.getAll(payload);
  return response.data;
});

const initialState = {
  isLoading: false,
  productList: [],
};

const homeSlice = createSlice({
  name: 'home',
  initialState, // giá trị mặc định của reducer
  reducers: {},
  extraReducers: {
    /* 
    mỗi khi sử dụng createAsyncThunk -> thì ở exacReducer sẽ luôn luôn nhận về 3 trạng thái
    3 trạng thái này là của Promise ( xem lại promise trong js để hiểu )
     */
    [getProduct.pending]: (state, action) => {
      // mới vào call api
      state.isLoading = true;
    },
    [getProduct.fulfilled]: (state, action) => {
      // call api thành công
      // state.productList = action;
      state.isLoading = false;
    },
    [getProduct.rejected]: (state, action) => {
      // call api thất bại
    },
  },
});

export const actions = homeSlice.actions;

export default homeSlice.reducer;
