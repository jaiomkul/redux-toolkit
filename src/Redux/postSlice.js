import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getPostApi = createAsyncThunk("products/fetch", async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return data;
});

export const initialStatuses = {
  Loading: "Loading",
  FulFilled: "fulfilled",
  Error: "Error",
};

const postSlice = createSlice({
  name: "post",
  initialState: {
    data: [],
    status: initialStatuses.FulFilled,
  },
  extraReducers: {
    [getPostApi.pending]: (state, action) => {
      state.status = initialStatuses.Loading;
    },
    [getPostApi.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.status = initialStatuses.FulFilled;
    },
    [getPostApi.rejected]: (state, action) => {
      state.status = initialStatuses.Error;
    },
  },
});

export default postSlice.reducer;
