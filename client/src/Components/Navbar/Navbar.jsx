import "./NavBar.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>
          <div className="logo-container" onClick={() => navigate("")}>
            <img
              src="../../assets/logopng.png"
              alt="logo"
              className="navbar-logo"
            />
            <span>║ Fuerzas Privadas Latinas</span>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={() => navigate("/about")}>Nosotros</Nav.Link>
            <Nav.Link onClick={() => navigate("/condor")}>Condor</Nav.Link>
            <Nav.Link onClick={() => navigate("/delta")}>Delta</Nav.Link>
            <Nav.Link onClick={() => navigate("/mike")}>Mike</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
