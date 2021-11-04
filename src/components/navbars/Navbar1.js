import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import ToDo from "../ToDo";
import Practice from "../Practice";

const Nav = styled.div`
  height: 60px;
  background-color: lightgoldenrodyellow;
  display: flex;
  justify-content: right;
  align-items: center;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  margin-right: 5vw;
`;

const Navbar1 = () => {
  return (
    <div>
      <Router>
        <Nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Practice">Practice</NavLink>
          <NavLink to="/ToDo">ToDo</NavLink>
        </Nav>
        <Switch>
          <Route path="/ToDo" component={ToDo} />
          <Route path="/Practice" component={Practice} />
        </Switch>
      </Router>
    </div>
  );
};

export default Navbar1;
