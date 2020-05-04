import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const MemoryHeader = styled.h1`
  font-size: 24px;
  text-align: center;
  color: blue;
`;

function Header(){
  return (
    <React.Fragment>
      <MemoryHeader>
        Memory lane
      </MemoryHeader>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/signin">Sign In</Link>
        </li>
      </ul>
    </React.Fragment>
  );
}

export default Header; 