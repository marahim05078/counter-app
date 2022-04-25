import "./App.css";
import { useState } from "react";

function App() {
  let [countOne, setCountOne] = useState(0);
  let [countBy, setCountBy] = useState(0);

  const increaseHandler = () => {
    setCountOne((prev) => (prev += parseInt(countBy)));
  };
  const decreaseHandler = () => {
    setCountOne((prev) => (prev -= countBy));
  };
  return (
    <div className="App">
      <h3>Counter: {countOne}</h3>
      <span>Increase/Decrease by:</span>
      <input
        type="number"
        value={countBy}
        onChange={(e) => setCountBy(e.target.value)}
      />
      <button onClick={increaseHandler}>+</button>
      <button onClick={decreaseHandler}>-</button>
    </div>
  );
}

export default App;
