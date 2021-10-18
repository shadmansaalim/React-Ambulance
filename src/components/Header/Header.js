import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faUserPlus, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { HashLink } from 'react-router-hash-link';
import { useHistory } from 'react-router-dom';

const Header = () => {
    const history = useHistory();
    return (
        <Navbar variant="white" style={{ backgroundColor: '	#42ba96' }} expand="lg">
            <Container>
                <Navbar.Brand className="text-white" href="/home">
                    EASA
                    {/* <img
                        src="https://medulance.com/images/logo.png"
                        width="200"
                        height="50"
                        className="d-inline-block align-top"
                        alt="Ambulance Victoria"
                    /> */}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link className="text-white" href="/home">Home</Nav.Link>
                        <HashLink className="nav-link text-white" to="/#services">Services</HashLink>
                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                        <Button className="mx-lg-2" variant="outline-dark">Login <FontAwesomeIcon icon={faSignInAlt} /></Button>
                        <Button onClick={() => history.push('/sign-up')} variant="dark">Sign Up <FontAwesomeIcon icon={faUserPlus} /></Button>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;