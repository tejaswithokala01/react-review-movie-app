import React, { useState } from "react";
import {
  Button,
  Typography,
  Dialog,
  DialogTitle,
  TextField,
  DialogContent,
  DialogActions,
  Box,
  Alert,
} from "@mui/material";

const ReviewModal = ({
  openModal,
  setOpenModal,
  postMovieReview,
  selectedItem,
}) => {
  const [movieReview, setMovieReview] = useState("");
  const moreThan100Chars = movieReview.length > 100;

  return (
    <Dialog
      open={openModal}
      maxWidth={"sm"}
      fullWidth
      onClose={() => setOpenModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <DialogTitle>
        <b>Review Movie:</b> {selectedItem?.[0]?.title}
      </DialogTitle>
      <DialogContent>
        {moreThan100Chars && (
          <Alert severity="error">
            More than 100 characters not allowed! sorry.
          </Alert>
        )}

        <Box marginBottom={2}>
          <Typography variant="body">
            Have some review, please share!
          </Typography>
        </Box>
        <Box>
          <TextField
            fullWidth
            value={movieReview}
            onChange={({ target }) => setMovieReview(target.value)}
            label="Write your movie review"
            multiline
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          color="error"
          autoFocus
          onClick={() => setOpenModal(false)}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          color="primary"
          autoFocus
          disabled={!movieReview || moreThan100Chars}
          onClick={() => {
            postMovieReview(movieReview);
            setOpenModal(false);
            setMovieReview("");
          }}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ReviewModal;
