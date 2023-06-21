import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {FaBell, FaShoppingCart} from 'react-icons/fa';

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
                            <Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Text className="justify-content-end">
                        <ul className="navbar-nav d-flex flex-row">
                            <li className="nav-item me-3 me-lg-0">
                                <a className="nav-link" href="#">
                                    <span className="badge rounded-pill badge-notification bg-danger">1</span>
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