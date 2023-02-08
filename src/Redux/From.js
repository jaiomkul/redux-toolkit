const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

// Thunks
export const postFormApi = createAsyncThunk("form/post", async (body) => {
  const res = await fetch("http://localhost:8080/news", {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });
  // const data = await res.json();
  // return data;
  return res;
});

export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const postSlice = createSlice({
  name: "product",
  initialState: {
    post: [],
    status: STATUSES.IDLE,
  },
  reducers: {
    // setProducts(state, action) {
    //     state.data = action.payload;
    // },
    // setStatus(state, action) {
    //     state.status = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postFormApi.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(postFormApi.fulfilled, (state, action) => {
        state.post.push(action.payload);
        state.status = STATUSES.IDLE;
      })
      .addCase(postFormApi.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      });
  },
});
export default postSlice.reducer;
