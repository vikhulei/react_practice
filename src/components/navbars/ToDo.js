import React, { useState, useEffect, useRef } from "react";

const ToDo = () => {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState("");
  const focusInput = useRef();

  const additem = () => {
    setItems((prev) => [...prev, item]);
    setItem("");
    focusInput.current.focus();
  };

  const deleteItem = (idx) => {
    setItems(items.filter((val, index) => index !== idx));
  };

  useEffect(() => {
    focusInput.current.focus();
  }, []);

  return (
    <div>
      <h1>Hello</h1>
      <input
        ref={focusInput}
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <button onClick={additem}>Add item</button>
      <div>
        {items.map((val, idx) => {
          return (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                width: "40vw",
                justifyContent: "space-between",
                margin: "auto",
                backgroundColor: "lightgreen"
              }}
              key={idx}
            >
              <p>{val}</p>
              <button
                style={{ height: "20px" }}
                onClick={() => {
                  deleteItem(idx);
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ToDo;
