import { useState } from 'react'
import './App.css'

//custom hook
function useCounter(){
  const [count, setCount] = useState(0);

  function increaseCount(){
    setCount(c => c+1);
  }
  return {
    count : count,
    increaseCount : increaseCount
  }
}

function App() {
  return (
    <>
      <Counter/>
      <Counter/>
      <Counter/>
      <Counter/>
    </>
  )
}

function Counter(){
  const {count, increaseCount} = useCounter();
  return (
    <>
      <button onClick={increaseCount}>iNCRESE {count}</button>
    </>
  )
}

export default App
