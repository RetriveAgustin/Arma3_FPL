import "./NavBar.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>
          <NavLink to="/" className="navbar-brand">
            <img
              src="../../assets/logopng.png"
              alt="logo"
              className="navbar-logo"
            />
            <span> | Fuerzas Privadas Latinas</span>
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <NavLink
                to="/about"
                style={{
                  textDecoration: "none",
                  color: "#A0A0A0",
                }}
              >
                About
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                to="/condor"
                style={{
                  textDecoration: "none",
                  color: "#A0A0A0",
                }}
              >
                Condor
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                to="/delta"
                style={{
                  textDecoration: "none",
                  color: "#A0A0A0",
                }}
              >
                Delta
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                to="/mike"
                style={{
                  textDecoration: "none",
                  color: "#A0A0A0",
                }}
              >
                Mike
              </NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
