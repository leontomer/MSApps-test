import { configureStore } from "@reduxjs/toolkit";
import pageReducer from "../../src/features/page/pageSlice";
import imagesReducer from "../../src/features/images/imagesSlice";
import modalReducer from "../../src/features/modal/modalSlice";
import errorReducer from "../../src/features/error/errorSlice";

export const store = configureStore({
  reducer: {
    page: pageReducer,
    images: imagesReducer,
    modal: modalReducer,
    error: errorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
