import React from "react";
import "./App.css";
import ToDo from "./ToDo";
import Practice from "./Practice";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/" className="navItem">
            Home
          </Link>
          <Link to="/Practice" className="navItem">
            Practice
          </Link>
          <Link to="/ToDo" className="navItem">
            ToDo
          </Link>
        </nav>
        <Switch>
          <Route path="/Practice" component={Practice} />
          <Route path="/ToDo" component={ToDo} />
        </Switch>
      </Router>
    </div>
  );
};
export default App;
