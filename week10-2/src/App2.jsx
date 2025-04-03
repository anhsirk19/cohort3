import { createContext, useState, useContext } from "react";


const countContext = createContext();

function CountProvider({children}){
    const [count, setCount] = useState(0);
    return <countContext.Provider value={{
        count : count,
        setCount : setCount
    }}>
        {children}
    </countContext.Provider>
}

function App(){
    return <>
    <CountProvider>
        <Increase/>
        <Decrease/>
        <Value/>
    </CountProvider>
    </>
}

function Increase(){
    const {setCount} = useContext(countContext);
    return <div>
        <button onClick={() => setCount(c => c+1)}>Increase</button>
    </div>
}

function Decrease(){
    const {setCount} = useContext(countContext);
    return <div>
        <button onClick={() => setCount(c => c-1)}>Decrease</button><br/>
    </div>
}

function Value(){
    const {count} = useContext(countContext);
    return <div>
        {count}
    </div>
}

export default App;