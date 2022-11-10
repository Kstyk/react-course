import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [counter, setCounter] = useState(0)
  const [active, setIsActive] = useState(true)

  const handler = () => setCounter(prevValue => prevValue + 1)
  const toogleVisibilityCounter = () => setIsActive(prevValue => !prevValue)

  // useEffect(() => {
  //   alert('Hello')
  // }, [])

  const counterComponent = active ? <Counter rerenderCounter={counter} /> : null

  return (
    <div>
      <button onClick={toogleVisibilityCounter}>Pokaż/ukryj komponent</button>
      <button onClick={handler}>Przerenderuj komponent</button>
      {counterComponent}
    </div>
  );
}

const Counter = ({ rerenderCounter }) => {
  const [counter, setCounter] = useState(0)

  const handleMouseMove = e => setCounter(e.clientX)

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => {  // coś ala componentWillUnmount
      window.removeEventListener('mousemove', handleMouseMove)
    }

  }, [rerenderCounter])

  return (
    <div>
      <p>{counter}</p>
      <p>{rerenderCounter}</p>
    </div>
  )
}

export default App;
