import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import { NavData } from "./NavData";
import Submenu from "./Submenu";
import SideBarItems from "./SideBarItems";

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: yellowgreen;
  height: 60px;
  margin-bottom: 40px;
`;

const SideBar = styled.div`
  position: absolute;
  top: 0;
  left: ${({ sideBar }) => (sideBar ? "0" : "-100%")};
  transition: 500ms;
  width: 180px;
  height: 100%;
  background-color: rgba(240, 128, 128, 1);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const SideLink = styled(Link)`
  font-size: 2rem;
  margin: 10px;
  text-decoration: none;
`;

const LinksWrapper = styled.div`
  display: flex;
  justify-content: right;
  position: relative;
  top: calc(30px - 0.5rem);
`;

const NavbarMain = () => {
  const [sideBar, setSideBar] = useState(false);
  const [subItem, setSubItem] = useState(true);
  const showSideBar = () => {
    setSideBar(!sideBar);
  };
  const showSubItem = () => {
    setSubItem(!subItem);
  };
  const hideSubItem = () => {
    setSubItem(false);
  };

  return (
    <div>
      <Nav>
        <SideLink to="#">
          <FaIcons.FaBars onClick={showSideBar} />
        </SideLink>
        <SideBar sideBar={sideBar}>
          <SideLink to="#">
            <AiIcons.AiOutlineClose onClick={showSideBar} />
          </SideLink>
          {NavData.map((itemm, indexx) => (
            <SideBarItems
              key={indexx}
              item={itemm}
              showSideBar={showSideBar}
              showSubItem={showSubItem}
              hideSubItem={hideSubItem}
              subItem={subItem}
            />
          ))}
        </SideBar>
        <LinksWrapper>
          {NavData.map((item, index) => (
            <Submenu key={index} item={item} />
          ))}
        </LinksWrapper>
      </Nav>
    </div>
  );
};

export default NavbarMain;
