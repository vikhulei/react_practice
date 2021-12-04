import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: lightcoral; */
`;

const NavLink = styled(Link)`
  text-decoration: none;
  margin-right: 5vw;
  color: darkblue;
  font-weight: bold;
`;

const SubNavWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  top: 20px;
  background-color: yellowgreen;
  line-height: 2;
`;

const SubLink = styled(Link)`
  text-decoration: none;
  color: darkblue;
`;

const Submenu = ({ item }) => {
  const [subNav, setSubNav] = useState(false);
  const showSubNav = () => {
    setSubNav(true);
  };
  const hideSubNav = () => {
    setSubNav(false);
  };

  return (
    <NavLinkWrapper onMouseEnter={showSubNav} onMouseLeave={hideSubNav}>
      <NavLink to={item.path}>{item.name}</NavLink>
      <SubNavWrap>
        {subNav &&
          item.subNav &&
          item.subNav.map((itm, ind) => {
            return (
              <div key={ind}>
                <SubLink to={itm.subpath}>{itm.subname}</SubLink>
              </div>
            );
          })}
      </SubNavWrap>
    </NavLinkWrapper>
  );
};

export default Submenu;
