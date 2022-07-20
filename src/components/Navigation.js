import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import logo from "../assets/logo.png"

function Navigation(props) {
    return (
        <Navbar collapseOnSelect className='navbar navbar-default navbar-trans navbar-expand-lg fixed-top' expand="lg" bg="white" variant="light">
            <Container>
                <Navbar.Toggle className='collaspsed' type="button" data-bs-toggle="collapse" data-bs-target="#navbarDefault" aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation" />
                <Navbar.Brand href="/">
                    <img
                        src={logo}
                        alt='Luminous Logo'
                        width="250"
                        height="130"
                        // className="d-inline-block align-top"
                    />
                </Navbar.Brand>
              
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mx-auto">
                    <Nav.Link href="/">HOME</Nav.Link>
                    <Nav.Link href="/about">HOLIDAYS</Nav.Link>
                    <Nav.Link href="/about">ANOTHER</Nav.Link>

                    <NavDropdown title="PACKAGES" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                        Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                        Separated link
                    </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#deets">MORE DEALS</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                    ANOTHER DEAL
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;