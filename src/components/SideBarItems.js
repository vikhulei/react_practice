import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkWrapper = styled.div`
  text-align: left;
  display: flex;
`;

const SideLink = styled(Link)`
  text-decoration: none;
  color: darkblue;
  font-size: 1.3rem;
  line-height: 3rem;
  margin-left: 10px;
  &:hover {
    background-color: grey;
  }
`;

const SubSideLinkWrapper = styled.div`
  width: ;
`;

const SubSideLink = styled(Link)`
  margin-left: 15px;
  text-decoration: none;
  color: darkred;
  width: 100%;
  &:hover {
    background-color: grey;
  }
`;

const SideBarItems = ({ item, showSideBar }) => {
  const [subItem, setSubItem] = useState(false);
  const showSubItem = () => {
    setSubItem(true);
  };
  const hideSubItem = () => {
    setSubItem(false);
  };

  return (
    <LinkWrapper onClick={showSideBar}>
      <SideLink to={item.path}>
        <span onMouseEnter={showSubItem} onMouseLeave={hideSubItem}>
          {item.name}
        </span>
      </SideLink>

      {subItem && item.subNav
        ? item.subNav.map((itm, ind) => {
            return (
              <div key={ind}>
                <SubSideLink to={itm.subpath}>{itm.subname}</SubSideLink>
              </div>
            );
          })
        : null}
    </LinkWrapper>
  );
};

export default SideBarItems;
