import React, { useState, useEffect } from "react";
import { getImages, paginate } from "../../api/imagesApi";
import { useSelector } from "react-redux";
import { RootState, Image } from "../../Types";
import "./Images.css";
import Card from "@mui/material/Card";
import { next, prev, reset } from "../../features/page/pageSlice";
import { useDispatch } from "react-redux";
import ImageDetails from "../imagedetails/ImageDetails";
import { toggleModal } from "../../features/modal/modalSlice";
import { Select, MenuItem, Button, CircularProgress } from "@mui/material";
import {
  categories,
  endingPage,
  startingPage,
  previousPage,
  nextPage,
} from "../../Constants";
import ErrorAlert from "../erroralert/ErrorAlert";

const Images: React.FC = () => {
  const images = useSelector((state: RootState) => state.images);
  const page = useSelector((state: RootState) => state.page);
  const [selectedImage, setSelectedImage] = useState<Image>(images[0]);
  const [category, setCategory] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    (async () => await getImages())();
    setLoading(false);
  }, []);

  const handleChangeCategory = async (category: string) => {
    dispatch(reset());
    setCategory(category);
    setLoading(true);
    await getImages(category);
    setLoading(false);
  };

  const handlePagination = async (direction: string) => {
    setLoading(true);
    if (direction === previousPage) {
      dispatch(prev());
      await paginate(page - 1, category);
    } else {
      dispatch(next());
      await paginate(page + 1, category);
    }
    setLoading(false);
  };

  const handleImgClick = (image: Image) => {
    setSelectedImage(image);
    dispatch(toggleModal());
  };

  return (
    <div>
      <div className="button-container">
        <span className="left-button">
          <Button
            disabled={page === startingPage}
            onClick={() => handlePagination("prev")}
            variant="contained"
          >
            {previousPage}
          </Button>
        </span>
        <span className="select">
          <Select
            value={category}
            onChange={(e) => handleChangeCategory(e.target.value)}
          >
            {categories.map((cat, ind) => (
              <MenuItem key={ind} value={cat}>
                {cat}
              </MenuItem>
            ))}
          </Select>
        </span>
        <span className="right-button">
          <Button
            disabled={page === endingPage}
            onClick={() => handlePagination("next")}
            className="top-right-button"
            variant="contained"
          >
            {nextPage}
          </Button>
        </span>{" "}
      </div>
      <span className="loader">{loading && <CircularProgress />}</span>
      <div className="image-container">
        {images.map((image) => (
          <div key={image.id}>
            <Card sx={{ maxHeight: 100 }}>
              <img
                src={image.previewURL}
                onClick={() => handleImgClick(image)}
                alt={image.tags}
              ></img>
            </Card>
          </div>
        ))}
        <ImageDetails selectedImage={selectedImage} />
      </div>
      <ErrorAlert />
    </div>
  );
};

export default Images;
