import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap'

class TeebayNavbar extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand>Teebay</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Button} variant="light">
                  {' '}
                  <Link to={'/'} style={{ textDecoration: 'none' }}>
                    Home
                  </Link>{' '}
                </Nav.Link>
                <Nav.Link as={Button} variant="light">
                  <Link to={'/products'} style={{ textDecoration: 'none' }}>
                    Products
                  </Link>
                </Nav.Link>
                <NavDropdown title="Account" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Button}>
                    <Link to={'/signin'} style={{ textDecoration: 'none' }}>
                      Sign In
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Button}>
                    <Link to={'/signup'} style={{ textDecoration: 'none' }}>
                      Sign Up
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    )
  }
}

export default TeebayNavbar
