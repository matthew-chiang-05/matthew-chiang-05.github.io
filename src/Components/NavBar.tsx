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
      <NavLogo href="#">Matthew Chiang</NavLogo>
      <NavMenu>
        <NavItem>
          <NavLinks to="about" smooth={true} duration={10}>
            About
          </NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to="projects" smooth={true} duration={10}>
            Experiences
          </NavLinks>
        </NavItem>
        <NavItem>
          <NavItem>
            <NavLinks to="projects" smooth={true}>
              Resume
            </NavLinks>
          </NavItem>
        </NavItem>
      </NavMenu>
    </NavBarContainer>
  );
};

export default NavBar;
