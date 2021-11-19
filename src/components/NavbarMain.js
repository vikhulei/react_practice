import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import styled from "styled-components";
import Practice from "./Practice";
import Navbars from "./navbars/Navbars";
import ToDo from "./navbars/ToDo";
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

const NavButton = styled.div`
  color: darkblue;
  margin-right: 5vw;
  &:hover {
    cursor: pointer;
  }
`;

const NavbarMain = () => {
  return (
    <div>
      <Router>
        <Nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Practice">Practice</NavLink>

          <NavButton
            onClick={() => {
              alert("hi there");
            }}
          >
            Navbars
          </NavButton>
          <NavLink to="/ToDo">ToDo</NavLink>
        </Nav>
        <Switch>
          <Route path="/Practice" component={Practice} />
          <Route path="/Navbars" component={Navbars} />
          <Route path="/ToDo" component={ToDo} />
        </Switch>
      </Router>
    </div>
  );
};

export default NavbarMain;
