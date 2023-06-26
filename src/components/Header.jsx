import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {FaBell, FaShoppingCart} from 'react-icons/fa';
import React from "react";

function Header() {
    return (
        <div>
            <Navbar expand="lg" className="navbar navbar-expand-lg navbar-dark bg-primary">
                <Container>
                    <Navbar.Brand href="#home">Shopping Cart</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Text className="justify-content-end">
                        <ul className="navbar-nav d-flex flex-row">
                            <li className="nav-item me-3 me-lg-0">
                                <a className="nav-link" href="#">
                                    <FaShoppingCart/>
                                </a>
                            </li>
                            <li className="nav-item me-3 me-lg-0">
                                <a className="nav-link" href="#">
                                    <FaBell/>
                                </a>
                            </li>
                        </ul>
                    </Navbar.Text>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;