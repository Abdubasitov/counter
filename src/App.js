import { useState } from "react";
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  const increment = () =>{
    setCount(count + 1)
  }
    const decrement = () =>{
      setCount(count - 1)
  }
  return (
    <div className="wraper">
      <h1 className="heading">Counter</h1>
      <span>{count}</span>
      <div className="buttons">
      <button className="button" onClick={decrement}>
        -
      </button>
      <button className="button" onClick={increment}>
        +
      </button>
      </div>
    </div>
  );
}

export default App;
