import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import styled from "styled-components";
import Practice from "./Practice";
import Navbar1 from "./navbars/Navbar1";
import ToDo from "./ToDo";

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
`;

const Navbar_main = () => {
  return (
    <div>
      <Router>
        <Nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Practice">Practice</NavLink>
          <NavLink to="/Navbar1">Navbar1</NavLink>
          <NavLink to="/ToDo">ToDo</NavLink>
        </Nav>
        <Switch>
          <Route path="/Practice" component={Practice} />
          <Route path="/Navbar1" component={Navbar1} />
          <Route path="/ToDo" component={ToDo} />
        </Switch>
      </Router>
    </div>
  );
};

export default Navbar_main;
