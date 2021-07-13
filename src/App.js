import React from "react"
import "./App.css"
import {useState, useRef} from "react"


const App = () => {

const [items, setItems] = useState([])
const [item, setItem] = useState("")
const focusInput = useRef()
let newItems = []

const additem = () => {
    setItems(prev => [...prev, item])
    setItem("")
    focusInput.current.focus()
}

const deleteItem = (idx) => {
  setItems(items.filter((val, index) => index != idx))
  alert(JSON.stringify(items))
}

  return <div className="App">
  <h1>Hello</h1>
    <input
    ref={focusInput}
    value={item}
    onChange={(e => setItem(e.target.value))}
    />
    <button onClick={additem}>Add item</button>
    <div>
      {items.map((val, idx) => {
        return <div style={{display: "flex", alignItems: "center", width: "40vw", justifyContent: "space-between", margin: "auto", backgroundColor: "lightgreen"}} key={idx}>
            <p>{val}</p>
            <button style={{height: "20px"}} onClick={(() => {
              deleteItem(idx)
            })}>Delete</button>
          </div>
      })}
    </div>
  </div>
}
export default App

  

