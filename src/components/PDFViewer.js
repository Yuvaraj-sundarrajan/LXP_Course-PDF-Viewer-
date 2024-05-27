import React, { useState, useEffect } from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchPdfRequest } from "../actions/FetchPdfAction";
import { Container, Row } from "react-bootstrap";

function PDFViewer() {
  const [error, setError] = useState(null);
  const [viewpdf, setViewPdf] = useState(null);
  const [fileResponse, setFileResponse] = useState([]);

  const newPlugin = defaultLayoutPlugin({
    toolbar: {
      download: {
        enabled: false, // Disable the download button
      },
    },
  });

  const pdf = useSelector((state) => state.fetchPdf.material);

  const dispatch = useDispatch();

  useEffect(() => {
    const materialId = "3da3c70b-5120-433a-8edc-cf29dfde09a1"; // Hardcoded material ID
    dispatch(fetchPdfRequest(materialId))
      .then((response) => {
        console.log("Fetched PDF file path:", response);
        setFileResponse(response); // Assuming response is an array
      })
      .catch((error) => {
        console.error("Error fetching PDF:", error);
        setError(error.message);
      });
  }, [dispatch]);

  useEffect(() => {
    if (pdf && pdf.length > 0) {
      setViewPdf(pdf[1].filePath); // Automatically select the first PDF in the array
    }
  }, [pdf]);

  useEffect(() => {
    if (fileResponse.length > 0) {
      console.log("filePath", fileResponse[1].filePath); // Log file path
      const url = `${fileResponse[1].filePath}`; // Construct the URL
      console.log("filePath", url);
      setViewPdf(url); // Set the viewpdf state with the URL
    }
  }, [fileResponse]);

  return (  
    <Container >
     <Row className="justify-content-md-center">
     <div
          className="container"
          style={{ width: "100%",  minHeight:"81vh", overflow: "auto",marginTop:'7px'}}
        >
        <div className="pdf-container" style={{  minHeight:"81vh" }}>
          {error && <div className="error">{error}</div>}
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js">
            {viewpdf ? (
              <Viewer fileUrl={viewpdf} plugins={[newPlugin]} />
            ) : (
              <div >No PDF available</div>
            )}
          </Worker>
        </div>
      </div>
     </Row>
    </Container>

);
}

export default PDFViewer;