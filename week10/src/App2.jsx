import {useRef} from "react"

function App(){
    const inputRef = useRef();
    function focusFunction(){
        // document.getElementById("box").focus();
        inputRef.current.focus();
    }
    return <div>
        <input ref={inputRef} type="text"></input>
        <button onClick={focusFunction}>focus on the input</button>
    </div>
}

export default App;