import { useEffect, useState } from "react";

function App(){
    const [click, setClick] = useState(1);
    const [info, setInfo] = useState(null);

    useEffect(() => {
        console.log("mount");
        let fetchData = async () => {
            try {
              const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${click}`);
              const data = await res.json();
              setInfo(data);
            } catch (error) {
              console.error("Error fetching data:", error);
            }
          };
      
          fetchData();

          return function(){
            console.log("unmount");
          }
    }, [click]);
    return <div>
        <button onClick={() => setClick(1)}  style={{color: click === 1 ? "red" : "black"}}>todo1</button>
        <button onClick={() => setClick(2)}  style={{color: click === 2 ? "red" : "black"}}>todo2</button>

        <button onClick={() => setClick(3)}  style={{color: click === 3 ? "red" : "black"}}>todo3</button>
        <button onClick={() => setClick(4)}  style={{color: click === 4 ? "red" : "black"}}>todo4</button>
        <div>{info ? info.title : "Loading..."}</div>
    </div>

}

export default App;