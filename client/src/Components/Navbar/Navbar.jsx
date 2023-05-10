import "./NavBar.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NavBar = () => {

  const navigate = useNavigate();

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>
            <img
              src="../../assets/logopng.png"
              alt="logo"
              className="navbar-logo"
            />
            <span> | Fuerzas Privadas Latinas</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={()=> navigate("/about")}>
                About
            </Nav.Link>
            <Nav.Link>
                Condor
            </Nav.Link>
            <Nav.Link>
                Delta
            </Nav.Link>
            <Nav.Link>
                Mike
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
