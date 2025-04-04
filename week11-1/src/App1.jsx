import { useState } from "react";
import {useFetch} from "./hooks/useFetch.js"
function App(){
    const [no, setNo] = useState(1);
    const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/posts/" + no, 5000);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    
    return <div>
        <div>
            <pre>{JSON.stringify(data, null, 2)}</pre>;
        </div>
        <div>
            <button onClick={() => setNo(1)}>post 1</button>
            <button onClick={() => setNo(2)}>post 2</button>
            <button onClick={() => setNo(3)}>post 3</button>
        </div>
    </div>
}

export default App;