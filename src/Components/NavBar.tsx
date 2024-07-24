import React from "react";
import {
  NavBarContainer,
  NavBtn,
  NavBtnLinks,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
} from "./NavbarStyles";

const NavBar = () => {
  return (
    <NavBarContainer>
      <NavLogo>Matthew Chiang</NavLogo>
      <NavMenu>
        <NavItem>
          <NavLinks>About</NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks>Experiences</NavLinks>
        </NavItem>
        <NavItem>
          <NavItem>
            <NavLinks>Resume</NavLinks>
          </NavItem>
        </NavItem>
      </NavMenu>
    </NavBarContainer>
  );
};

export default NavBar;
