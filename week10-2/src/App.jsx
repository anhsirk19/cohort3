import { useState, createContext, useContext } from "react";

const BulbContext = createContext();

function BulbProvider({children}){
  const [bulbOn, setBulbOn] = useState(true);

  return <BulbContext.Provider value={{
    bulbOn : bulbOn,
    setBulbOn : setBulbOn
  }}>
    {children}
  </BulbContext.Provider>
}

function App() {

  return (
    <>
    <BulbProvider>
      <LightBulb/>
    </BulbProvider>
    </>
  )

}

function LightBulb(){
  return <div>
    <BulbState/>
    <ToggleBulbState/>
  </div>
}

function BulbState(){
  const {bulbOn} = useContext(BulbContext);

  return <div>
    {bulbOn ? <img src='https://www.w3schools.com/js/pic_bulbon.gif'></img> : <img src="https://www.w3schools.com/js/pic_bulboff.gif"></img>}
  </div>
}

function ToggleBulbState(){
  const {setBulbOn} = useContext(BulbContext);

  function change(){
    setBulbOn( currentState => ! currentState);
  }
  return <div>
    <button onClick={change}>toggle the bulb</button>
  </div>
}
export default App
