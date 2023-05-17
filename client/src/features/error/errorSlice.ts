import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: string = "";

export const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    setErrorMessage: (state, action: PayloadAction<string>) => {
      return action.payload;
    },
    resetErrorMessage: (state) => {
      return "";
    },
  },
});

export const { setErrorMessage, resetErrorMessage } = errorSlice.actions;

export default errorSlice.reducer;
