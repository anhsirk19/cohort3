import { useEffect,  useState } from "react";
import "./App.css"


const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
};



function App(){

    const [state, setState] = useState("");
    const debouncedVal = useDebounce(state, 200);
    function change(e){
        setState(e.target.value);
    }
    useEffect(()=>{
        console.log(debouncedVal);
        console.log("expensive operation");
    }, [debouncedVal]);
    return <>
        <input type="text" onChange={change}></input>
    </>
}

export default App;