import React, { useState } from "react";

import "../src/App.css";

import List from "./Components/List";

const App = () => {
  const [inputList, setInputlist] = useState("");
  const [Items, setItems] = useState([]);

  const handleItem = (e) => {
    setInputlist(e.target.value);
    
  };

  const handleAddItem = () => {
    if(document.getElementById('item').value.length < 1) {
      window.alert('Please, try again!');
    } else {

    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputlist("");
  }};

  const handleDelete = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      })
    })
  };

  return (
    <>
      <div className="main ">
        <div className="center">
          <br />
          <h1> My List </h1>
          <br />
          <input
            id="item"
            type="text"
            placeholder="add item"
            onChange={handleItem}
            value={inputList}
          />
          
          <button onClick={handleAddItem}> + </button>

          <ol>
            {Items.map((item, id) => {
              return (
                <List key={id} id={id} text={item} onSelect={handleDelete} />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
