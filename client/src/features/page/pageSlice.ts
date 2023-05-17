import { createSlice } from "@reduxjs/toolkit";

const initialState: number = 1;

export const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    next: (state) => {
      return state + 1;
    },
    prev: (state) => {
      return state - 1;
    },
    reset: (state) => {
      return 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { next, prev, reset } = pageSlice.actions;

export default pageSlice.reducer;
