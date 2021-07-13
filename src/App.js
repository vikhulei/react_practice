import React from "react"
import "./App.css"
import { useSelector, useDispatch } from "react-redux"
import { increment, decrement } from "./action"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import About from "./About"
import Projects from "./Projects"

const App = () => {
  const dispatch = useDispatch()
  const counter = useSelector(state => state)

  const increm = () => {
    dispatch(increment)
  }

  const decrem = () => {
    dispatch(decrement)
  }

  return <div className="App">
  <Router>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/projects">Projects</Link>
    <h1>Hello</h1>
    <h2>{counter}</h2>
    <button onClick={increm}>+</button>
    <button onClick={decrem}>-</button>
    
  <Switch>
     <Route path={["/about/:name", "/about"]} component={About}/>
     <Route path="/projects" component={Projects}/>
  </Switch>
  </Router>

  </div>
}
export default App

  

