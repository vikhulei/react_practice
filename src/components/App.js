import React from "react";
import "./App.css";
import NavbarMain from "./NavbarMain";
import { Proba } from "./Proba";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Practice from "./Practice";
import Navbars from "./navbars/Navbars";
import ToDo from "./navbars/ToDo";

const App = () => {
  return (
    <div className="App">
      <Router>
        <NavbarMain />
        <Switch>
          <Route path="/Practice" component={Practice} />
          <Route path="/Navbars" component={Navbars} />
          <Route path="/ToDo" component={ToDo} />
        </Switch>

        {Proba.map((value, index) => (
          <div key={index}>
            <h3>
              {value.title} {value.firstName} {value.lastName}
            </h3>
          </div>
        ))}
      </Router>
    </div>
  );
};
export default App;
