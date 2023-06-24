import { Card, Container, Form, Nav, Navbar } from "react-bootstrap";

function App() {
  return (
    <>
      <div className="bg-color">
        <Navbar collapseOnSelect expand="lg" className="">
          <Container>
            <Navbar.Brand href="#home" className="text-white-color text-bold">
              Image Converison Tool
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav>
                <Nav.Link href="#deets" className="text-white-color">
                  Report
                </Nav.Link>
                <Nav.Link
                  eventKey={2}
                  href="#memes"
                  className="text-white-color"
                >
                  About
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container className="d-flex align-items-center justify-content-center vh-100">
          <Card>
            <Card.Header className="text-center">
              Image Conversion Tool
            </Card.Header>
            <Card.Img variant="top" />
            <Card.Body>
              <Form>
                <Form.Group className="mb-3" controlId="text.ControlInput1">
                  <Form.Label>Reason to Use :</Form.Label>
                  <Form.Control type="text" placeholder="website" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="select.ControlInput2">
                  <Form.Select aria-label="Default select example">
                    <option>Select Your Image Format</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>Default file input example</Form.Label>
                  <Form.Control type="file" />
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </>
  );
}

export default App;
