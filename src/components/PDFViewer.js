import React, { useState, useEffect } from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchPdfRequest } from "../actions/FetchPdfAction";
import { Container, Row } from "react-bootstrap";
 
function PDFViewer(prop) {
  const [error, setError] = useState(null);
  const {material}= prop;
  const [viewpdf, setViewPdf] = useState(material);
 
  const [fileResponse, setFileResponse] = useState([]);
 useEffect(()=>{
console.log(prop);
 },[])
  const newPlugin = defaultLayoutPlugin({
    toolbar: {
      download: {
        enabled: false, // Disable the download button
      },
    },
  });
  useEffect(()=>{
    setViewPdf(material)
  },[material])

return (
    <Container >
     <Row className="justify-content-md-center">
     <div
          className="container"
          style={{ width: "100%", height: "100vh", overflow: "auto",marginTop:'7px'}}
        >
        <div className="pdf-container" style={{ width: 1250 }}>
          {error && <div className="error">{error}</div>}
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js">
            {viewpdf ? (
              <Viewer fileUrl={viewpdf} plugins={[newPlugin]} />
            ) : (
              <div>No PDF available</div>
            )}
          </Worker>
        </div>
      </div>
     </Row>
    </Container>

  );
}
 
export default PDFViewer;
