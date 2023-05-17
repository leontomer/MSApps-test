import axios, { AxiosResponse } from "axios";
import { Image } from "../Types";
import { store } from "../app/store";
import { setImages } from "../features/images/imagesSlice";
import { setErrorMessage } from "../features/error/errorSlice";

export const getImages = async (type?: string): Promise<void> => {
  try {
    const url =
      type === undefined
        ? "http://localhost:5000/images"
        : `http://localhost:5000/images?type=${type}`;
    const response: AxiosResponse<Image[]> = await axios.get(url);
    store.dispatch(setImages(response.data));
  } catch (error) {
    if (error instanceof Error) {
      store.dispatch(setErrorMessage(error.message));
    }
  }
};

export const paginate = async (page: number, type?: string): Promise<void> => {
  try {
    const response: AxiosResponse<Image[]> = await axios.get(
      "http://localhost:5000/paginate",
      {
        params: {
          page: page,
          type: type,
        },
      }
    );
    store.dispatch(setImages(response.data));
  } catch (error) {
    if (error instanceof Error) {
      store.dispatch(setErrorMessage(error.message));
    }
  }
};
