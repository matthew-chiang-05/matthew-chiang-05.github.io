import styled from 'styled-components';
import  {Link} from 'react-scroll';
import React from 'react';

export const NavBarContainer = styled.nav`
    background: #333;
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    z-index: 10;
    position: fixed;
    font-family: "Lucida Sans Typewriter";

`;  

export const NavLogo = styled.a`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-family:
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -10px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 60px;
`;

export const NavLinks = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-size: 1.25rem;

  &:hover {
    color: #01bf71;
    transition: all 0.2s ease-in-out;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLinks = styled.a`
    border-radius: 10px;
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 1rem;
    color: #fff;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    font-size: 1.25rem;

    &:hover {
      color: #01bf71;
      transition: all 0.2s ease-in-out;
    }
`;
