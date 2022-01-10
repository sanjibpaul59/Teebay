import React, { Component } from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap'
import { Link } from 'react-router-dom'
class TeebayNavbar extends Component {
  render() {
    return (
      <div>
        <Navbar color="light" expand="md" light>
          <NavbarBrand>Teebay</NavbarBrand>
          <NavbarToggler onClick={function noRefCheck() {}} />
          <Collapse navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink>
                  <Link to="/products">Products</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link to={'/about'}>About</Link>
                </NavLink>
              </NavItem>
              <UncontrolledDropdown inNavbar nav>
                <DropdownToggle caret nav>
                  Account
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink>
                      <Link to={'/signin'}>Sign In</Link>
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink>
                      <Link to={'/signup'}>Sign Up</Link>
                    </NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default TeebayNavbar
