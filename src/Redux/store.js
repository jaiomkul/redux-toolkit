import { configureStore } from "@reduxjs/toolkit";

import postSlice from "./postSlice";
import dataSlice from "./dataSlice";
export const store = configureStore({
  reducer: {
    post: postSlice,
    data: dataSlice,
  },
});
