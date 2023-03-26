import { useState } from "react";
import "./style.css";

function App() {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  const addItem = (e) => {
    setItem(e.target.value);
  };

  const submitHandler = () => {
    setList((prev) => {
      return [...prev, item];
    });
    setItem("");
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>TO-DO LIST</h1>
          <br />

          <input
            type="text"
            placeholder="Add task"
            onChange={addItem}
            autoComplete="off"
            value={item}
          />

          <button onClick={submitHandler}>+</button>
          <ol>
            {list.map((entry, id) => {
              return <li key={id}>{`${id + 1}. ${entry}`}</li>;
            })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
