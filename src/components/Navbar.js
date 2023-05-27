import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  background-color: #f2f2f2;
  padding: 10px;
  display: flex;
  justify-content: end;
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
    color: #333;
    padding: 5px;

    &:hover {
      background-color: #ddd;
    }
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavLinks>
        <NavLink>
          <Link to="/">Home</Link>
        </NavLink>
        <NavLink>
          <Link to="/trips">Trips</Link>
        </NavLink>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
