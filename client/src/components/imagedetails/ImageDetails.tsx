import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootState, Image } from "../../Types";
import { toggleModal } from "../../features/modal/modalSlice";
import { Box, Typography, Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "./ImageDetails.css";
import {
  imageDetailsHeader,
  downloadsText,
  commentsText,
  tagsText,
  likesText,
  viewsText,
  collectionsText,
} from "../../Constants";
type Props = {
  selectedImage: Image;
};

const BoxStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 3,
};

const ImageDetails = (props: Props) => {
  const dispatch = useDispatch();
  const open = useSelector((state: RootState) => state.modal);
  const handleClose = () => {
    dispatch(toggleModal());
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
          <Box sx={BoxStyle}>
            <CloseIcon className="close-icon" onClick={handleClose} />
            <Typography align="center" variant="h5">
              {imageDetailsHeader}
            </Typography>

            <Typography align="center">
              {tagsText} : {props.selectedImage?.tags}
            </Typography>
            <Typography align="center">
              {downloadsText} : {props.selectedImage?.downloads}
            </Typography>
            <Typography align="center">
              {likesText} : {props.selectedImage?.likes}
            </Typography>
            <Typography align="center">
              {viewsText} : {props.selectedImage?.views}
            </Typography>
            <Typography align="center">
              {commentsText} : {props.selectedImage?.comments}
            </Typography>
            <Typography align="center">
              {collectionsText} : {props.selectedImage?.collections}
            </Typography>
          </Box>
        </div>
      </Modal>
    </div>
  );
};

export default ImageDetails;
