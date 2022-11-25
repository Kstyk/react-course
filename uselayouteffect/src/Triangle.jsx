import React, { useLayoutEffect } from "react";
// import "./style.css";

const Triangle = () => {
  useLayoutEffect(() => {
    const elem = document.querySelector(".triangle");

    elem.style.top = "50%";
    elem.style.left = "50%";
    elem.style.transform = "translate (-50%, -50%) rotate (90deg)";
  }, []);

  return <div className="triangle"></div>;
};

export default Triangle;
