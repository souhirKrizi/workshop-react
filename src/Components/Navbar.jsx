import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink 
              to="/" 
              end
              className={({ isActive }) => isActive ? 'nav-link active-link' : 'nav-link'}
            >
              MyEvents
            </NavLink>
            <NavLink 
              to="/events"
              className={({ isActive }) => isActive ? 'nav-link active-link' : 'nav-link'}
            >
              Events
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
