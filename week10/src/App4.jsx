import { useState, useRef } from "react";

function App(){
    const [timer, setTimer] = useState(0);
    const intervalRef = useRef(null);
    function on(){
        if (intervalRef.current !== null) return; // Already running, do nothing
        intervalRef.current = setInterval(()=>{
            setTimer(c => c + 1);
        }, 1000);
    }
    function off(){
        clearInterval(intervalRef.current);
        intervalRef.current = null;
    }
    function reset(){
        off(); // Stops the timer and ensures interval is cleared
        setTimer(0);
    }
    return <div>
        <h1>Timer </h1>
        {timer}
        <br/><br />
        <button onClick={on}>start</button>
        <button onClick={off}>stop</button>
        <button onClick={reset}>reset</button>
    </div>
}

export default App;