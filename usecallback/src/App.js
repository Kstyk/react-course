import React, { useState, useMemo, useCallback } from "react";
import "./App.css";
import Counter from "./Counter";

const App = () => {
  const [state, setState] = useState({ x: 0, y: 0 });
  const [firstCounter, setFirstCounter] = useState(0);
  const [secondCounter, setSecondCounter] = useState(0);

  const increaseX = () => setState({ ...state, x: state.x + 1 });
  const increaseY = () => setState({ ...state, y: state.y + 1 });

  const increaseFirstcounter = useCallback(
    () => setFirstCounter((prevValue) => prevValue + 1),
    []
  );

  const increaseSecondCounter = useCallback(
    () => setSecondCounter((prevValue) => prevValue + 1),
    []
  );

  const firstCounterComponent = (
    <Counter callback={increaseFirstcounter} index={1} />
  );

  const secondCounterComponent = (
    <Counter callback={increaseSecondCounter} index={2} />
  );

  return (
    <>
      <p>Licznik nr 1, wynosi {firstCounter}</p>
      <p>Licznik nr 2, wynosi {secondCounter}</p>
      {firstCounterComponent}
      {secondCounterComponent}
      {/* <Counter counter={state} index={1} /> */}
      {/* <Counter counter={state} index={2} /> */}
      {/* <button onClick={increaseX}>Zwiększ licznik nr 1</button>
      <button onClick={increaseY}>Zwiększ licznik nr 2</button> */}
    </>
  );
};

export default App;
