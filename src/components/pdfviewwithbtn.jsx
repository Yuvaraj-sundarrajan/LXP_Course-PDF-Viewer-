import React, { useState } from "react";
import { Container, Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import Modal from 'react-bootstrap/Modal';
import PDFViewer from './PDFViewer'; // Assuming you have a PDFViewer component

const Pdfviewwithbtn = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Container maxWidth="sm">
        <IconButton color="secondary" aria-label="add an alarm" onClick={handleShow}>
          <PictureAsPdfIcon fontSize="large" />
        </IconButton>
       
       
      </Container>
      <Modal show={show} onHide={handleClose} centered size="lg" >
  <Modal.Header>
    <Modal.Title>Modal heading</Modal.Title>
    <button type="button" className="close" onClick={handleClose}>
      <span aria-hidden="true">×</span>
    </button>
  </Modal.Header>
  <Modal.Body  style={{ minHeight:"83vh" }}  >
    <PDFViewer    />
  </Modal.Body>
</Modal>

    </Box>
    
  );
};

export default Pdfviewwithbtn;
