import React from 'react';
import { Navbar, Container, Nav, Offcanvas, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faUserPlus, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { HashLink } from 'react-router-hash-link';
import { useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const history = useHistory();

    const { user, logOutUser, setError } = useAuth();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Navbar className="bg-dark" expand="lg">
            <Container>
                <Navbar.Brand className="text-white" href="/home">
                    <img
                        src="https://www.ambulance.vic.gov.au/wp-content/themes/av_themes/dist/img/logo.svg"
                        width="150"
                        className="d-inline-block align-top"
                        alt="Ambulance Victoria"
                    />
                </Navbar.Brand>
                <Navbar.Toggle className="bg-light" aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto d-flex align-items-center">
                        <Link className="text-white nav-link " to="/home">Home</Link>
                        <HashLink className="nav-link text-white me-lg-2" to="/#services">Services</HashLink>
                        <Link className="text-white nav-link  me-lg-2" to="/contact">Contact</Link>
                        <Link className="text-white nav-link  me-lg-2" to="/careers">Careers</Link>
                    </Nav>
                    <Nav className="ms-auto">
                        {
                            user ?
                                user?.photoURL ?
                                    <img className="mx-auto img-fluid rounded-circle" src={user.photoURL} alt={user.displayName} style={{ width: 40, height: 40 }} data-bs-toggle="tooltip" data-bs-placement="bottom" title={user.displayName} onClick={handleShow} ></img>
                                    :
                                    <FontAwesomeIcon className="mx-auto  fs-1 text-white text-center" data-bs-toggle="tooltip" data-bs-placement="bottom" title={user?.displayName} icon={faUserCircle} onClick={handleShow} />

                                :
                                <div className="d-flex flex-column flex-lg-row mt-2 mt-lg-0">
                                    <Button className="me-lg-2" onClick={() => {
                                        setError('');
                                        history.push('/login');
                                    }} variant="outline-light">Login <FontAwesomeIcon icon={faSignInAlt} /></Button>
                                    <Button className="mt-1 mt-lg-0" onClick={() => {
                                        setError('');
                                        history.push('/sign-up');
                                    }} variant="light">Sign Up <FontAwesomeIcon icon={faUserPlus} /></Button>
                                </div>
                        }

                        <Offcanvas show={show} onHide={handleClose} placement="end">
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title></Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <div className="text-center">
                                    {
                                        user?.photoURL ?
                                            <img className="img-fluid rounded-circle settings-user-img" src={user.photoURL} alt={user?.displayName}></img>
                                            :
                                            <FontAwesomeIcon className="fs-1 text-secondary settings-user-img" icon={faUserCircle} />
                                    }
                                    <p className="mt-2">{user?.displayName}</p>
                                    <button onClick={() => {
                                        logOutUser();
                                        handleClose();
                                    }} className="btn btn-warning">Log Out</button>
                                </div>

                            </Offcanvas.Body>
                        </Offcanvas>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;

