import { Container, Nav, Navbar } from "react-bootstrap";

function NavbarComp() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="">
        <Container>
          <Navbar.Brand href="/" className="text-white-color text-bold">
            Image Converison Tool
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link href="/report" className="text-white-color">
                Report
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes" className="text-white-color">
                About
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComp;
