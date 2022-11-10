import React, { useState } from "react";

const Form = ({ addHandler }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleOnClick = () => {
    const newCourse = {
      id: Math.floor(Math.random() * 1000),
      title: value,
    };

    addHandler({ type: "ADD", object: newCourse });
    setValue("");
  };

  return (
    <div>
      <input
        onChange={handleChange}
        value={value}
        type="text"
        name="title"
        id="title"
      />
      <button onClick={handleOnClick}>Dodaj</button>
    </div>
  );
};

export default Form;
