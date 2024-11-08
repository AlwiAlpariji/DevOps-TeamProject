import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/Navbarcomp.css'; // Optional: for any custom styles

const Navbarcomp = () => {
  return (
    <div>
      <Navbar expand="lg" style={{ backgroundColor: '#323232' }} text-light> {/* Updated background color here */}
        <Container>
          <Navbar.Brand href="/" className="text-light">Petto</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink to="/" className="nav-link text-light">Home</NavLink>
              <NavLink to="/Store" className="nav-link text-light">Store</NavLink>
              <NavLink to="/Adopt" className="nav-link text-light">Adopt</NavLink>
              <NavLink to="/Payment" className="nav-link text-light">Payment</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbarcomp;
