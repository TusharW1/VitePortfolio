import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const location = useLocation()

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand as={Link} to="/">Tushar Waghmare</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" active={location.pathname === "/"}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/projects" active={location.pathname === "/projects"}>
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/education" active={location.pathname === "/education"}>
              Education
            </Nav.Link>
            <Nav.Link as={Link} to="/certifications" active={location.pathname === "/certifications"}>
              Certifications
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" active={location.pathname === "/contact"}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header