import { useRef, useState, useEffect } from 'react'
import './App.css'

const usePrev = (value) => {
  const ref = useRef();

  // Update the ref with the current value after each render
  useEffect(() => {
    ref.current = value;
  }, [value]);

  // Return the previous value (current value of ref before it is updated)
  return ref.current;
};

function App() {
  const [count, setCount] = useState(0);
  const prevCount = usePrev(count); // Track the previous count value

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter with usePrev Hook</h1>
      <p>Current Count: {count}</p>
      <p>Previous Count: {prevCount}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)} style={{ marginLeft: '10px' }}>Decrement</button>
    </div>
  );
}

export default App
