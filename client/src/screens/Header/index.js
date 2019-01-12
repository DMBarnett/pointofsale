import React from "react";
import { Navbar, Nav, NavItem, NavLink, NavbarBrand } from "reactstrap"

function Header(){
  return(
    <div>
      <Navbar>
        <NavbarBrand href="/">Home</NavbarBrand>
      </Navbar>
    </div>
  )
};

export default Header;