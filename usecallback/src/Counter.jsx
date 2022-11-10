import React from "react";

const Counter = ({ callback, index }) => {
  console.log(`render licznika nr: ${index}`);

  return (
    <div>
      <p>
        <button onClick={callback}>Zwiększ licznik {index}</button>
      </p>
    </div>
  );
};

export default React.memo(Counter);
