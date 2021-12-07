import React, { useState, forwardRef, useImperativeHandle } from "react";
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
  width: 180px;
  &:hover {
    background-color: grey;
  }
`;

const SubSideLinkWrapper = styled.div`
  background-color: lightgoldenrodyellow;
  position: absolute;
  left: 180px;
  top: 60px;
  width: calc(100vw - 180px);
  height: calc(100vh - 60px);
`;

const SubSideLink = styled(Link)`
  text-decoration: none;
  color: darkred;
  width: 180px;
`;

const SideBarItems = forwardRef(({ item, showSideBar }, ref) => {
  const [subItem, setSubItem] = useState(false);
  const showSubItem = () => {
    setSubItem(!subItem);
  };
  const hideSubItem = () => {
    setSubItem(false);
  };

  useImperativeHandle(ref, () => {
    return {
      showToast: hideSubItem
    };
  });

  return (
    <LinkWrapper
      onClick={item.subNav ? showSubItem : showSideBar}
      onMouseLeave={hideSubItem}
    >
      <SideLink to={item.path}>{item.name}</SideLink>

      {subItem && item.subNav ? (
        <SubSideLinkWrapper>
          {item.subNav.map((itm, ind) => {
            return (
              <div key={ind} onClick={(hideSubItem, showSideBar)}>
                <SubSideLink to={itm.subpath}>{itm.subname}</SubSideLink>
              </div>
            );
          })}
        </SubSideLinkWrapper>
      ) : null}
    </LinkWrapper>
  );
});

export default SideBarItems;
