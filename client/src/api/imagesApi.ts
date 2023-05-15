import axios, { AxiosResponse, AxiosError } from "axios";

interface Image {
  id: number;
  pageURL: string;
  type: string;
  tags: string;
  previewURL: string;
  previewWidth: number;
  previewHeight: number;
  webformatURL: string;
  webformatWidth: number;
  webformatHeight: number;
  largeImageURL: string;
  imageWidth: number;
  imageHeight: number;
  imageSize: number;
  views: number;
  downloads: number;
  collections: number;
  likes: number;
  comments: number;
  user_id: number;
  user: string;
  userImageURL: string;
}

export const getImages = async (type?: string): Promise<Image[]> => {
  try {
    const url =
      type === undefined
        ? "http://localhost:5000/images"
        : `http://localhost:5000/images?type=${type}`;
    const response: AxiosResponse<Image[]> = await axios.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};
