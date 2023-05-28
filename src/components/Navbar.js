import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  padding: 10px;
  display: flex;
  justify-content: space-between; /* Updated to distribute space between logo and links */
  align-items: center; /* Added to vertically align logo and links */
`;

const NavLinks = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const NavLink = styled.li`
  margin-right: 10px;

  a {
    text-decoration: none;
    color: #fff;
    padding: 5px;

    &:hover {
      text-shadow: 0 0 10px #fff;
    }
  }
`;

const Logo = styled.div`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  padding: 10px;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo>Travelopia</Logo>
      <NavLinks>
        <NavLink>
          <Link to="/">HOME</Link>
        </NavLink>
        <NavLink>
          <Link to="/trips">TRIPS</Link>
        </NavLink>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
