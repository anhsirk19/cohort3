
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  let [counterVisible, setCounterVisible] = useState(true);

  useEffect(function() {
    setInterval(() => {
      setCounterVisible(c => !c);
    }, 5000)
  }, [])
  return <div>
    <b>
    hlo
    </b>
    {counterVisible ? <Counter></Counter> : null}
    {/* <div style={{visibility: !counterVisible ? "hidden" : "visible"}}><Counter></Counter></div> */}
  </div>
}

function Counter(){

  const [count, setCount] = useState(0);

  //mounting
  useEffect(() => {
      console.log("mount");
      let clock = setInterval(() => {
        console.log("inside timer");
        setCount (count => count + 1)
      }, 1000);

    //unmounting this calls when it is unmounted
    return function(){
      console.log("unmount");
      clearInterval(clock);
    }
  }, []);
  return <div>
    <h1>{count}</h1>
  </div>
}

export default App
