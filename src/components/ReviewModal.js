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
} from "@mui/material";

const ReviewModal = ({ openModal, setOpenModal, postMovieReview }) => {
    const [movieReview, setMovieReview] = useState("");

  return (
    <Dialog
      open={openModal}
      maxWidth={"sm"}
      fullWidth
      onClose={() => setOpenModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <DialogTitle>Review Movie</DialogTitle>
      <DialogContent>
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
            inputProps={{ maxLength: 100 }}
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
          disabled={!movieReview}
          onClick={() => postMovieReview(movieReview)}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ReviewModal;
