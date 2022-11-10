import React from "react";

const Counter = ({ counter, index }) => {
  console.log(`render licznika nr: ${index}`);

  return (
    <div>
      <p>
        Licznik nr {index}, wynosi {counter.x}
      </p>
    </div>
  );
};

export default React.memo(Counter);
