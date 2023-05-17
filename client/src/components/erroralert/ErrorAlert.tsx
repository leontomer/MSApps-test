import React from "react";
import Snackbar from "@mui/material/Snackbar";
import { useSelector } from "react-redux";
import { RootState } from "../../Types";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { useDispatch } from "react-redux";
import { resetErrorMessage } from "../../features/error/errorSlice";
import { clickAwayReason } from "../../Constants";

const ErrorAlert = () => {
  const dispatch = useDispatch();
  const errorMessage = useSelector((state: RootState) => state.error);

  const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === clickAwayReason) {
      return;
    }

    dispatch(resetErrorMessage());
  };

  return (
    <Snackbar
      open={errorMessage.length > 0}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity="error">
        {errorMessage}
      </Alert>
    </Snackbar>
  );
};

export default ErrorAlert;
