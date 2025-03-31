import { useEffect, useState } from 'react'

import './App.css'

function App() {
  return <div>
    <b>
      hi there
    </b>
    <Counter></Counter>
  </div>
}

function Counter(){
  const [count , setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount((c) => {
        return c+1;
      })
    }, 1000);
  }, []);

  return <div>
    <h1 id="text">{count}</h1>
  </div>
}

export default App
