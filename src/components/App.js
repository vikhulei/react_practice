import React from "react";
import "./App.css";
import NavbarMain from "./NavbarMain";
import { Proba } from "./Proba";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Practice from "./Practice";
import Navbars from "./navbars/Navbars";
import ToDo from "./navbars/ToDo";
import Home1 from "../../src/pages/Home1";
import Home2 from "../../src/pages/Home2";
import Home3 from "../../src/pages/Home3";
import Name3 from "../../src/pages/Name3";
import Name4 from "../../src/pages/Name4";
import { NavData } from "./NavData";

const App = () => {
  return (
    <div className="App">
      <Router>
        <NavbarMain />
        <Switch>
          <Route path="/Practice" component={Practice} />
          <Route path="/Navbars" component={Navbars} />
          <Route path="/ToDo" component={ToDo} />
          <Route path="/Home1" component={Home1} />
          <Route path="/Home2" component={Home2} />
          <Route path="/Home3" component={Home3} />
          <Route path="/Name3" component={Name3} />
          <Route path="/Name4" component={Name4} />
        </Switch>

        {Proba.map((value, index) => (
          <div key={index}>
            <h3>
              {value.title} {value.firstName} {value.lastName}
            </h3>
          </div>
        ))}

        {/* {NavData.map((val, ind) => (
          <div key={ind}>
            {val.path} {val.name}
            {val.subNav.map((vall, indd) => (
              <div>
                <p>{vall.subpath}</p>
                <p>{vall.subname}</p>
              </div>
            ))}
          </div>
        ))} */}
      </Router>
    </div>
  );
};
export default App;
