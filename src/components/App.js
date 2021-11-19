import React from "react";
import "./App.css";
import NavbarMain from "./NavbarMain";
import { Proba } from "./Proba";

const App = () => {
  const press = () => {
    console.log(Proba);
  };
  return (
    <div className="App">
      {/* <NavbarMain /> */}

      {Proba.map((value, index) => (
        <div key={index}>{value.firstName}</div>
      ))}
      <button onClick={press}>Press Me</button>
    </div>
  );
};
export default App;
