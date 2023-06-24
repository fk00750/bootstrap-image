    <div className="d-flex align-items-center justify-content-center vh-100">
      <Container className="d-flex justify-content-center">
        <Row>
          <Container>
            <Card>
              <Card.Header className="text-center">
                Image Convertor Tool
              </Card.Header>
              <Form className="mx-4 my-2">
                <Row className="d-flex justify-content-center">
                  <Col>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Used For"
                      className="mb-3"
                    >
                      <Form.Control
                        type="email"
                        placeholder="name@example.com"
                      />
                    </FloatingLabel>
                  </Col>
                </Row>
                <Row className="d-flex justify-content-center">
                  <Col>
                    <Form.Select>
                      <option>Select Format</option>
                      <option>JPEG</option>
                      <option>PNG</option>
                      <option>WEBP</option>
                      <option>PNG</option>
                    </Form.Select>
                  </Col>
                </Row>
                <Row className="d-flex justify-content-center">
                  <Col className="text-center mt-2">
                    <Button variant="success">Upload</Button>
                  </Col>
                </Row>
              </Form>
            </Card>
          </Container>
        </Row>
      </Container>
    </div>