import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Image } from "../../Types";

const initialState: Image[] = [];

export const imagesSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    setImages: (state, action: PayloadAction<Image[]>) => {
      return action.payload;
    },
  },
});

export const { setImages } = imagesSlice.actions;

export default imagesSlice.reducer;
