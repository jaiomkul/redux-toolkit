import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getPostApi = createAsyncThunk("api/post", async () => {
  const res = await fetch("http://localhost:8080/posts");
  const data = await res.json();
  console.log(data);
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
