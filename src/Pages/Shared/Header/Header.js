import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import "./Header.css";
import logo from "../../../images/logos/logo.png"

const Header = () => {
    return (
        <div className='nav-container my-3'>
            <Navbar className='navbar p-0' collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand className='p-0' href="#home">
                        <img className='rounded img-fluid w-75 md:w-100' src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link  href="#home">Home</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <NavDropdown title="Category" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link className='ms-4 px-4 text-center login' href="#login">Login</Nav.Link>
                            <Nav.Link className='border border-2 border-white rounded ms-4 text-center signup px-4' href="#signup">Sign Up</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;