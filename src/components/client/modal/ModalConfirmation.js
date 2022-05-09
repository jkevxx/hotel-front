import React from 'react'
import { Box, Button, Modal, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #d2d2d2',
  boxShadow: 24,
  p: 4,
  borderRadius: '10px',
  textAlign: 'center',
  color: '#0a0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'

};

export default function ModalConfirmation({ open, handleOpen, handleClose }) {

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CheckCircleIcon />

          <Typography id="modal-modal-title" variant="h6" component="h2"
            sx={{ marginLeft: '8px' }}
          >
            Reservation Created
          </Typography>
          {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
        </Box>
      </Modal>
    </div>
  );
}
