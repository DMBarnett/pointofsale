import React from "react";
import { Navbar, Nav, NavItem, NavLink, NavbarBrand } from "reactstrap"
import "./style.css"

function Header(){
  return(
    <div>
      <Navbar>
        <NavbarBrand href="/">Home</NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/users">Users</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/inventory">Inventory</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  )
};

export default Header;