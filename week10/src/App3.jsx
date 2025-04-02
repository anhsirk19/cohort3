import { useState } from "react";

function App(){
    const [timer, setTimer] = useState(1);
    const [timeInterval, SetTimeInterval] = useState(null);
    function on(){
        if (timeInterval !== null) return;
        const newT = setInterval(()=>{
            setTimer(c => c + 1);
        }, 1000);
        SetTimeInterval(newT);//trigers a re-render
    }
    function off(){
        clearInterval(timeInterval);
        SetTimeInterval(null); //trigers a re-render
    }
    return <div>
        <h1>Timer </h1>
        {timer}
        <br/><br />
        <button onClick={on}>start</button>
        <button onClick={off}>end</button>
    </div>
}

export default App;