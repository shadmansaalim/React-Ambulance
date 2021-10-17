import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src="https://medulance.com/images/logo.png"
                        width="200"
                        height="50"
                        className="d-inline-block align-top"
                        alt="Ambulance Victoria"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/services">Services</Nav.Link>
                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                        <Button className="mx-2" variant="info">Login</Button>
                        <Button variant="dark">Sign Up</Button>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;