import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  const updateCounter = (action) => {
    if (action === 'increment' && counter === 20) {
      alert('cant go above 20 mate');
    } else if (action === 'decrement' && counter === 0) {
      alert('cant go below 0 mate');
    } else {
      setCounter(action === 'increment' ? counter + 1 : counter - 1);
    }
  };

  return (
    <>
      <h1>Chai-aur-react | Counter</h1>
      <h3>Counter Value : {counter} </h3>
      <button onClick={() => updateCounter('increment')}>Increment</button>
      <br/>
      <br/>
      <button onClick={() => updateCounter('decrement')}>Decrement</button>
    </>
  )
}

export default App
