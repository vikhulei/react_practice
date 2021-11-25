import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { NavData } from "./NavData";
import Submenu from "./Submenu";

const Nav = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  background-color: yellowgreen;
  height: 60px;
  margin-bottom: 40px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  margin-right: 5vw;
  color: darkblue;
`;

const SubNavWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  top: 60px;
  height: 100px;
  width: 50px;
`;

const NavbarMain = () => {
  const [subNav, setSubNav] = useState(false);
  const showSubNav = () => {
    setSubNav(!subNav);
  };
  return (
    <div>
      <Nav>
        {NavData.map((item, index) => (
          <Submenu key={index} item={item} />
        ))}
      </Nav>
    </div>
  );
};

export default NavbarMain;

{
  /* <NavLink to="/">Home</NavLink>
<NavLink to="/Practice">Practice</NavLink>
<NavLink to="#">Navbars</NavLink>
<NavLink to="/ToDo">ToDo</NavLink> */
}

// item.subNav
// ? item.subNav.map((itm, ind) => <div key={ind}>{itm}</div>)
// : null
