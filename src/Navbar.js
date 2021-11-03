import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Practice from "./Practice";

const Navbar = () => {
  return (
    <div>
      <Router>
        <Link to="Practice">Practice</Link>
        <Switch>
          <Route path="./Practice" component={Practice} />
        </Switch>
      </Router>
    </div>
  );
};

export default Navbar;
