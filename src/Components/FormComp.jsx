import axios from "axios";
import  { useState } from "react";
import { Alert, Button, Card, Container, Form, Image } from "react-bootstrap";

function FormComp() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [droppedImage, setDroppedImage] = useState(null);

  // form data
  const [use, setUse] = useState("");
  const [format, setFormat] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [imageLinkSize, setImageLinkSize] = useState("");
  const [imageSize, setImageSize] = useState(null);

  // error message
  const [error, setError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (selectedFile) {
      if (use.trim().length === 0) {
        setError(true);
        setErrorMessage("Please mention the 'Use'");
        setTimeout(() => {
          setError(false);
          setErrorMessage("");
        }, 2000);
        return;
      }

      const formData = new FormData();

      formData.append("use", use);

      formData.append("format", format);

      formData.append("image", selectedFile);

      const response = await axios.post(
        "http://localhost:3000/v1/images/upload-image",
        formData
      );

      if (response.status === 200) {
        console.log(response);
        setImageLink(response.data.imageLink);
        setImageLinkSize(response.data.sizeInKb);
      }
    } else {
      setError(true);
      setErrorMessage("Please enter your purpose");
      setTimeout(() => {
        setError(false);
        setErrorMessage("");
      }, 2000);
      return;
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setDroppedImage(file || null);
      setImageSize(Math.round(file.size / 1024));
    }
  };

  return (
    <>
      <Container className="d-flex align-items-center justify-content-center vh-100">
        <Card>
          <Card.Header className="text-center">
            Image Conversion Tool
          </Card.Header>
          <Card.Body>
            {imageLink && (
              <Container className="text-center">
                <Alert
                  variant="info"
                  style={{
                    maxWidth: "310px",
                  }}
                >
                  <Alert.Link
                    href={imageLink}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {imageLink}
                  </Alert.Link>
                </Alert>
                {imageLinkSize && (
                  <p className="text-center">Image size: {imageLinkSize} KB</p>
                )}
                <Container>
                  <Button
                    variant="secondary"
                    style={{
                      fontSize: ".8rem",
                    }}
                  >
                    Copy Link
                  </Button>
                </Container>
              </Container>
            )}
            {error && (
              <Alert variant="danger" className="text-center">
                {errorMessage}
              </Alert>
            )}
            <Form
              onSubmit={(event) => {
                handleFormSubmit(event);
              }}
            >
              <Form.Group className="mb-3" controlId="text.ControlInput1">
                <Form.Label>Reason to Use:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Website"
                  value={use}
                  onChange={(event) => setUse(event.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="select.ControlInput2">
                <Form.Label>Select Your Image Format:</Form.Label>
                <Form.Select
                  aria-label="Image Format"
                  value={format}
                  onChange={(event) => setFormat(event.target.value)}
                >
                  <option>Select Your Image Format</option>
                  <option value="PNG">PNG</option>
                  <option value="JPG">JPG</option>
                  <option value="JPEG">JPEG</option>
                  <option value="WEBP">WEBP</option>
                  <option value="PDF">PDF</option>
                  <option value="PDF">GIF</option>
                </Form.Select>
              </Form.Group>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Upload Image:</Form.Label>
                <Form.Control type="file" onChange={handleFileChange} />
              </Form.Group>
              <Button variant="success" type="submit">
                Upload
              </Button>
            </Form>
            <Container className="text-center  mt-2">
              {droppedImage && (
                <Image
                  src={URL.createObjectURL(selectedFile)}
                  style={{
                    maxHeight: "84px",
                  }}
                />
              )}
              {(droppedImage || selectedFile) && (
                <p>{(droppedImage || selectedFile)?.name}</p>
              )}
              {imageSize && <p>Image size: {imageSize} KB</p>}
            </Container>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default FormComp;
