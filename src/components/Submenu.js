import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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

const MenuItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Submenu = ({ item }) => {
  const [subNav, setSubNav] = useState(false);
  const setTrue = () => {
    setSubNav(true);
  };
  const setFalse = () => {
    setSubNav(false);
  };

  return (
    <div>
      <MenuItemWrapper
        onMouse={item.subNav ? setTrue : null}
        onMouse={item.subNav ? setFalse : null}
      >
        <NavLink to={item.path}>{item.name}</NavLink>
        <SubNavWrap>
          {subNav &&
            item.subNav &&
            item.subNav.map((itm, ind) => {
              return (
                <div key={ind}>
                  <p>{itm.subpath}</p>
                  <p>{itm.subname}</p>
                </div>
              );
            })}
        </SubNavWrap>
      </MenuItemWrapper>
    </div>
  );
};

export default Submenu;
