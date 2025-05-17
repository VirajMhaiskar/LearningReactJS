import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


// THE BIGGEST POWER OF REACT IS IT'S STATE MANAGEMENT.
// WE CAN CHANGE THE UI ELEMENT OF 5 DIFFERENT PLACES USING A SIMPLE CODE AS WRITTEN HERE
// IN SIMPLE JS WE HAD TO SELECT ALL THE ELEMENT FIRST THEN CHNAGE THE COUNT THERE
// BUT REACT HANDLE IT ITSELF

function App() {

  let [counter, setCounter] = useState(5);

  // let counter = 5; ---> NOT GOING TO PROPOGATE IN THE UI

  const addValue = () => {
    if(counter >= 20) {
      setCounter(counter);
    } else {
      counter += 1;
      setCounter(counter);
    }
  }

  const removeValue = () => {
    if(counter <= 0) {
      setCounter(counter);
    } else {
      counter -= 1;
      setCounter(counter);
    }
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add Value: {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value: {counter}</button>

      <p>footer: {counter}</p>
    </>
  )
}

export default App
