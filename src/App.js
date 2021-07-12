import React from "react"
import "./App.css"
import { useSelector, useDispatch } from "react-redux"
import { increment, decrement } from "./action"

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
    <h1>Hello</h1>
    <h2>{counter}</h2>
    <button onClick={increm}>+</button>
    <button onClick={decrem}>-</button>
  </div>
}
export default App

  

