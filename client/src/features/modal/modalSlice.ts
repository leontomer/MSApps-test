import { createSlice } from "@reduxjs/toolkit";

const initialState: boolean = false;

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleModal: (state) => {
      return !state;
    },
  },
});

export const { toggleModal } = modalSlice.actions;

export default modalSlice.reducer;
